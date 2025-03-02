var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lotes_1 = new ol.format.GeoJSON();
var features_Lotes_1 = format_Lotes_1.readFeatures(json_Lotes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_1.addFeatures(features_Lotes_1);
var lyr_Lotes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_1, 
                style: style_Lotes_1,
                popuplayertitle: 'Lotes',
                interactive: true,
                title: '<img src="styles/legend/Lotes_1.png" /> Lotes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lotes_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lotes_1];
lyr_Lotes_1.set('fieldAliases', {'id': 'id', 'interior': 'No. de Interior', 'Prop': 'Nombre del Propietario', 'Cat_prop_NOMBRE PROPIETARIO': 'Nombre del Propietario', 'Cat_prop_TELEFONO': 'Num. Celular', 'Cat_prop_E-MAIL': 'e-mail', 'Cat_prop_INE': 'Cat_prop_INE', 'Cat_prop_NOMBRE Y FIRMA': 'Cat_prop_NOMBRE Y FIRMA', });
lyr_Lotes_1.set('fieldImages', {'id': 'TextEdit', 'interior': 'Range', 'Prop': 'TextEdit', 'Cat_prop_NOMBRE PROPIETARIO': 'TextEdit', 'Cat_prop_TELEFONO': 'TextEdit', 'Cat_prop_E-MAIL': 'TextEdit', 'Cat_prop_INE': 'TextEdit', 'Cat_prop_NOMBRE Y FIRMA': 'TextEdit', });
lyr_Lotes_1.set('fieldLabels', {'id': 'no label', 'interior': 'inline label - always visible', 'Prop': 'no label', 'Cat_prop_NOMBRE PROPIETARIO': 'inline label - always visible', 'Cat_prop_TELEFONO': 'inline label - always visible', 'Cat_prop_E-MAIL': 'inline label - always visible', 'Cat_prop_INE': 'no label', 'Cat_prop_NOMBRE Y FIRMA': 'no label', });
lyr_Lotes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});