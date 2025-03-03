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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIStandard_2 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_ImagendelosInteriores_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Imagen de los Interiores<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ImagendelosInteriores_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-11385132.542966, 2490133.628508, -11384967.508412, 2490336.798704]
        })
    });
var format_Lotes_4 = new ol.format.GeoJSON();
var features_Lotes_4 = format_Lotes_4.readFeatures(json_Lotes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_4.addFeatures(features_Lotes_4);
var lyr_Lotes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_4, 
                style: style_Lotes_4,
                popuplayertitle: 'Lotes',
                interactive: true,
                title: '<img src="styles/legend/Lotes_4.png" /> Lotes'
            });
var format_Luminarias_5 = new ol.format.GeoJSON();
var features_Luminarias_5 = format_Luminarias_5.readFeatures(json_Luminarias_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luminarias_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luminarias_5.addFeatures(features_Luminarias_5);
var lyr_Luminarias_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Luminarias_5, 
                style: style_Luminarias_5,
                popuplayertitle: 'Luminarias',
                interactive: true,
    title: 'Luminarias<br />\
    <img src="styles/legend/Luminarias_5_0.png" /> Foco LED<br />\
    <img src="styles/legend/Luminarias_5_1.png" /> Foco No LED<br />\
    <img src="styles/legend/Luminarias_5_2.png" /> No disponible<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(false);lyr_ESRIStandard_2.setVisible(false);lyr_ImagendelosInteriores_3.setVisible(false);lyr_Lotes_4.setVisible(true);lyr_Luminarias_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_ESRIStandard_2,lyr_ImagendelosInteriores_3,lyr_Lotes_4,lyr_Luminarias_5];
lyr_Lotes_4.set('fieldAliases', {'id': 'id', 'interior': 'No. de Interior', 'Prop': 'Nombre del Propietario', 'Cat_prop_NOMBRE PROPIETARIO': 'Nombre del Propietario', 'Cat_prop_TELEFONO': 'Num. Celular', 'Cat_prop_E-MAIL': 'e-mail', 'Cat_prop_INE': 'Cat_prop_INE', 'Cat_prop_NOMBRE Y FIRMA': 'Cat_prop_NOMBRE Y FIRMA', });
lyr_Luminarias_5.set('fieldAliases', {'num_lum': 'Num. de Luminaria', 'tip_foc': 'Tipo de Foco', });
lyr_Lotes_4.set('fieldImages', {'id': 'TextEdit', 'interior': 'Range', 'Prop': 'TextEdit', 'Cat_prop_NOMBRE PROPIETARIO': 'TextEdit', 'Cat_prop_TELEFONO': 'TextEdit', 'Cat_prop_E-MAIL': 'TextEdit', 'Cat_prop_INE': 'TextEdit', 'Cat_prop_NOMBRE Y FIRMA': 'TextEdit', });
lyr_Luminarias_5.set('fieldImages', {'num_lum': 'Range', 'tip_foc': 'ValueMap', });
lyr_Lotes_4.set('fieldLabels', {'id': 'no label', 'interior': 'inline label - always visible', 'Prop': 'no label', 'Cat_prop_NOMBRE PROPIETARIO': 'inline label - always visible', 'Cat_prop_TELEFONO': 'inline label - always visible', 'Cat_prop_E-MAIL': 'inline label - always visible', 'Cat_prop_INE': 'no label', 'Cat_prop_NOMBRE Y FIRMA': 'no label', });
lyr_Luminarias_5.set('fieldLabels', {'num_lum': 'no label', 'tip_foc': 'no label', });
lyr_Luminarias_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});