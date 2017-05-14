var parse = require('jsonstream').parse
var to = require('to2')
var mkdirp = require('mkdirp')
var fs = require('fs')
var path = require('path')
var shasum = require('shasum')
var dirs = {}

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  alias: { o: 'outdir' },
  default: { outdir: 'data' }
})

process.stdin
  .pipe(parse(['features',true]))
  .pipe(to.obj(function (row, enc, next) {
    var hash = shasum(String(row.properties.UID))
    var parts = [
      hash.slice(0,2),
      hash.slice(2,4),
      hash.slice(4)
    ]
    var file = path.resolve(argv.outdir, parts.join('/') + '.json')
    var dir = path.resolve(argv.outdir, parts.slice(0,-1).join('/'))
    mkdirp(dir, function (err) {
      fs.writeFile(file, JSON.stringify(row), next)
    })
  }))
