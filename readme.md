# gadm-data

split up gadm data features into separate geojson files
based on their admin code hierarchy

``` sh
curl -O http://biogeo.ucdavis.edu/data/gadm2.8/gadm28.shp.zip
mkdir gadm
unzip gadm28.shp.zip -d gadm-shp
ogr2ogr -f GeoJSON gadm.json gadm-shp/gadm28.shp -lco RFC7946=YES
bin/json-to-files.js -d gadm < gadm.json
```

Now you should have a directory structure like this:

```
```

This will hopefully be easier to work with than one big shapefile.
