# gadm-data

split up gadm data features into separate geojson files
based on the hash of the UID

``` sh
curl -O http://biogeo.ucdavis.edu/data/gadm2.8/gadm28.shp.zip
mkdir gadm
unzip gadm28.shp.zip -d gadm-shp
ogr2ogr -f GeoJSON gadm.json gadm-shp/gadm28.shp -lco RFC7946=YES
bin/json-to-files.js -o gadm < gadm.json
```

Now you should have a directory structure like this:

```
$ ls
00/  0e/  1c/  2a/  38/  46/  54/  62/  70/  7e/  8c/  9a/  a8/  b6/  c4/  d2/
e0/  ee/  fc/
01/  0f/  1d/  2b/  39/  47/  55/  63/  71/  7f/  8d/  9b/  a9/  b7/  c5/  d3/
e1/  ef/  fd/
02/  10/  1e/  2c/  3a/  48/  56/  64/  72/  80/  8e/  9c/  aa/  b8/  c6/  d4/
e2/  f0/  fe/
03/  11/  1f/  2d/  3b/  49/  57/  65/  73/  81/  8f/  9d/  ab/  b9/  c7/  d5/
e3/  f1/  ff/
04/  12/  20/  2e/  3c/  4a/  58/  66/  74/  82/  90/  9e/  ac/  ba/  c8/  d6/
e4/  f2/
05/  13/  21/  2f/  3d/  4b/  59/  67/  75/  83/  91/  9f/  ad/  bb/  c9/  d7/
e5/  f3/
06/  14/  22/  30/  3e/  4c/  5a/  68/  76/  84/  92/  a0/  ae/  bc/  ca/  d8/
e6/  f4/
07/  15/  23/  31/  3f/  4d/  5b/  69/  77/  85/  93/  a1/  af/  bd/  cb/  d9/
e7/  f5/
08/  16/  24/  32/  40/  4e/  5c/  6a/  78/  86/  94/  a2/  b0/  be/  cc/  da/
e8/  f6/
09/  17/  25/  33/  41/  4f/  5d/  6b/  79/  87/  95/  a3/  b1/  bf/  cd/  db/
e9/  f7/
0a/  18/  26/  34/  42/  50/  5e/  6c/  7a/  88/  96/  a4/  b2/  c0/  ce/  dc/
ea/  f8/
0b/  19/  27/  35/  43/  51/  5f/  6d/  7b/  89/  97/  a5/  b3/  c1/  cf/  dd/
eb/  f9/
0c/  1a/  28/  36/  44/  52/  60/  6e/  7c/  8a/  98/  a6/  b4/  c2/  d0/  de/
ec/  fa/
0d/  1b/  29/  37/  45/  53/  61/  6f/  7d/  8b/  99/  a7/  b5/  c3/  d1/  df/
ed/  fb/
$ ls 7f
03/  07/  14/  35/  50/  5b/  8e/  cd/  d0/  d2/  de/
$ ls 7f/03
f3f2febc46f3fa832d98251b0c98f64bc19b.json
```

This will hopefully be easier to work with than one big shapefile.
