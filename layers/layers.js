var wms_layers = [];

var format_JawaBarat_0 = new ol.format.GeoJSON();
var features_JawaBarat_0 = format_JawaBarat_0.readFeatures(json_JawaBarat_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JawaBarat_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JawaBarat_0.addFeatures(features_JawaBarat_0);
var lyr_JawaBarat_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JawaBarat_0, 
                style: style_JawaBarat_0,
                popuplayertitle: "Jawa Barat",
                interactive: true,
                title: '<img src="styles/legend/JawaBarat_0.png" /> Jawa Barat'
            });

lyr_JawaBarat_0.setVisible(true);
var layersList = [lyr_JawaBarat_0];
lyr_JawaBarat_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', '2021': '2021', '2022': '2022', '2023': '2023', 'Total': 'Total', });
lyr_JawaBarat_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', '2016': 'Range', '2017': 'Range', '2018': 'Range', '2019': 'Range', '2020': 'Range', '2021': 'Range', '2022': 'Range', '2023': 'Range', 'Total': 'Range', });
lyr_JawaBarat_0.set('fieldLabels', {'OBJECTID': 'header label - visible with data', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', '2016': 'no label', '2017': 'no label', '2018': 'no label', '2019': 'no label', '2020': 'no label', '2021': 'no label', '2022': 'no label', '2023': 'no label', 'Total': 'no label', });
lyr_JawaBarat_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});