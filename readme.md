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
1	  100.json  101       102      103	 104	   105	     106
107	  108	    109       10.json  11	 110	   111	     112
113	  114	    115       116      117	 118	   119.json  12
120	  121	    122       123      124	 125	   126	     127
128	  129	    13	      130      131	 132	   133	     134
135	  136	    137.json  138      139.json  140.json  141	     142
143	  144	    145       146      147	 148.json  149	     14.json
15	  150	    151       152      153	 154	   155	     156
157	  158	    159       16       160	 161	   162	     163
164.json  165.json  166       167      168	 169	   17	     170
171	  172	    173       174      175	 176.json  177	     178
179	  18	    180.json  181      182	 183	   184	     185
186	  187	    188       189      19	 190.json  191.json  192
193	  194	    195       196      197	 198	   199	     2
20	  200	    201       202      203	 204	   205	     206.json
207	  208	    209       21       210	 211	   212.json  213
214	  215	    216.json  217      218	 219	   22	     220
221	  222	    223       224      225	 226	   227	     228
229	  23	    230       231      232	 233	   234	     235
236	  237	    238       239      24	 240	   241	     242
243	  244	    245       246      247	 248.json  249	     25
250	  251	    252       253      254	 255	   256	     26
27	  28	    29	      3        30	 31	   32.json   33
34.json   35	    36	      37       38	 39	   4	     40
41	  42	    43	      44.json  45	 46	   47	     48
49	  5	    50.json   51.json  52.json	 53	   54	     55.json
56	  57	    58	      59       6	 60.json   61	     62
63	  64	    65	      66       67	 68	   69	     7
70	  71	    72	      73       74	 75.json   76	     77
78	  79	    8	      80       81	 82	   83	     84
85	  86	    87	      88.json  89	 90	   91	     92
93	  94	    95	      96       97	 98	   99	     9.json
```

with many files:

```
$ find|wc -l
294301
$ du -sh
3.9G	.
```

This will hopefully be easier to work with than one big shapefile.
