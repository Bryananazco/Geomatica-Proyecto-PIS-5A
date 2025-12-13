var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Areas_inundadas_1 = new ol.format.GeoJSON();
var features_Areas_inundadas_1 = format_Areas_inundadas_1.readFeatures(json_Areas_inundadas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areas_inundadas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_inundadas_1.addFeatures(features_Areas_inundadas_1);
var lyr_Areas_inundadas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_inundadas_1, 
                style: style_Areas_inundadas_1,
                popuplayertitle: 'Areas_inundadas',
                interactive: true,
    title: 'Areas_inundadas<br />\
    <img src="styles/legend/Areas_inundadas_1_0.png" /> Alto<br />\
    <img src="styles/legend/Areas_inundadas_1_1.png" /> Bajo<br />\
    <img src="styles/legend/Areas_inundadas_1_2.png" /> Medio<br />\
    <img src="styles/legend/Areas_inundadas_1_3.png" /> <br />' });
var format_Rio_2 = new ol.format.GeoJSON();
var features_Rio_2 = format_Rio_2.readFeatures(json_Rio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_2.addFeatures(features_Rio_2);
var lyr_Rio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rio_2, 
                style: style_Rio_2,
                popuplayertitle: 'Rio ',
                interactive: true,
                title: '<img src="styles/legend/Rio_2.png" /> Rio '
            });
var format_Vias_inundables_3 = new ol.format.GeoJSON();
var features_Vias_inundables_3 = format_Vias_inundables_3.readFeatures(json_Vias_inundables_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_inundables_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_inundables_3.addFeatures(features_Vias_inundables_3);
var lyr_Vias_inundables_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_inundables_3, 
                style: style_Vias_inundables_3,
                popuplayertitle: 'Vias_inundables',
                interactive: true,
    title: 'Vias_inundables<br />\
    <img src="styles/legend/Vias_inundables_3_0.png" /> <br />\
    <img src="styles/legend/Vias_inundables_3_1.png" /> Alto<br />\
    <img src="styles/legend/Vias_inundables_3_2.png" /> Bajo<br />\
    <img src="styles/legend/Vias_inundables_3_3.png" /> Medio<br />' });
var format_Edificaciones_4 = new ol.format.GeoJSON();
var features_Edificaciones_4 = format_Edificaciones_4.readFeatures(json_Edificaciones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edificaciones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edificaciones_4.addFeatures(features_Edificaciones_4);
var lyr_Edificaciones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edificaciones_4, 
                style: style_Edificaciones_4,
                popuplayertitle: 'Edificaciones',
                interactive: true,
    title: 'Edificaciones<br />\
    <img src="styles/legend/Edificaciones_4_0.png" /> Alto<br />\
    <img src="styles/legend/Edificaciones_4_1.png" /> Bajo<br />\
    <img src="styles/legend/Edificaciones_4_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Areas_inundadas_1.setVisible(true);lyr_Rio_2.setVisible(true);lyr_Vias_inundables_3.setVisible(true);lyr_Edificaciones_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Areas_inundadas_1,lyr_Rio_2,lyr_Vias_inundables_3,lyr_Edificaciones_4];
lyr_Areas_inundadas_1.set('fieldAliases', {'fid': 'fid', 'nivel_riesgo': 'nivel_riesgo', 'area_m2': 'area_m2', 'tipo_riesgo': 'tipo_riesgo', 'problema': 'problema', 'tipo_suelo': 'tipo_suelo', 'area_id': 'area_id', });
lyr_Rio_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_flujo': 'tipo_flujo', 'Influencia': 'Influencia', });
lyr_Vias_inundables_3.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'nivel_riesgo': 'nivel_riesgo', 'long': 'long', 'tipo_via': 'tipo_via', });
lyr_Edificaciones_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nivel_riesgo': 'nivel_riesgo', 'estado_estructural': 'estado_estructural', });
lyr_Areas_inundadas_1.set('fieldImages', {'fid': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'area_m2': 'TextEdit', 'tipo_riesgo': 'TextEdit', 'problema': 'TextEdit', 'tipo_suelo': 'TextEdit', 'area_id': '', });
lyr_Rio_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_flujo': 'TextEdit', 'Influencia': 'TextEdit', });
lyr_Vias_inundables_3.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'long': 'TextEdit', 'tipo_via': 'TextEdit', });
lyr_Edificaciones_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'estado_estructural': 'TextEdit', });
lyr_Areas_inundadas_1.set('fieldLabels', {'fid': 'inline label - always visible', 'nivel_riesgo': 'inline label - always visible', 'area_m2': 'inline label - always visible', 'tipo_riesgo': 'inline label - always visible', 'problema': 'inline label - always visible', 'tipo_suelo': 'inline label - always visible', 'area_id': 'inline label - always visible', });
lyr_Rio_2.set('fieldLabels', {'fid': 'inline label - always visible', 'nombre': 'inline label - always visible', 'tipo_flujo': 'inline label - always visible', 'Influencia': 'inline label - always visible', });
lyr_Vias_inundables_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'nivel_riesgo': 'inline label - always visible', 'long': 'inline label - always visible', 'tipo_via': 'inline label - always visible', });
lyr_Edificaciones_4.set('fieldLabels', {'fid': 'inline label - always visible', 'nombre': 'inline label - always visible', 'nivel_riesgo': 'inline label - always visible', 'estado_estructural': 'inline label - always visible', });
lyr_Edificaciones_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});