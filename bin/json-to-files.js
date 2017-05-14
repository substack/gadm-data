var parse = require('jsonstream').parse
var to = require('to2')
var mkdirp = require('mkdirp')
var fs = require('fs')
var path = require('path')
var dirs = {}

var minimist = require('minimist')
var argv = minimist(process.argv.slice(2), {
  alias: { o: 'outdir' },
  default: { outdir: 'data' }
})

process.stdin
  .pipe(parse(['features',true]))
  .pipe(to.obj(function (row, enc, next) {
    var parts = []
    for (var i = 0; i <= 5; i++) {
      var j = row.properties['ID_'+i]
      if (j === 0) break
      else parts.push(j)
    }
    var file = path.resolve(argv.outdir, parts.join('/') + '.json')
    var dir = path.resolve(argv.outdir, parts.slice(0,-1).join('/'))
    mkdirp(dir, function (err) {
      fs.writeFile(file, JSON.stringify(row), next)
    })
  }))
