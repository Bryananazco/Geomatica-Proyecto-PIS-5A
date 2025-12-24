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
    <img src="styles/legend/Areas_inundadas_1_2.png" /> Medio<br />' });
var format_Vias_inundables_2 = new ol.format.GeoJSON();
var features_Vias_inundables_2 = format_Vias_inundables_2.readFeatures(json_Vias_inundables_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_inundables_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_inundables_2.addFeatures(features_Vias_inundables_2);
var lyr_Vias_inundables_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vias_inundables_2, 
                style: style_Vias_inundables_2,
                popuplayertitle: 'Vias_inundables',
                interactive: true,
    title: 'Vias_inundables<br />\
    <img src="styles/legend/Vias_inundables_2_0.png" /> Alto<br />\
    <img src="styles/legend/Vias_inundables_2_1.png" /> Bajo<br />\
    <img src="styles/legend/Vias_inundables_2_2.png" /> Medio<br />' });
var format_Reddedrenaje_3 = new ol.format.GeoJSON();
var features_Reddedrenaje_3 = format_Reddedrenaje_3.readFeatures(json_Reddedrenaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reddedrenaje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reddedrenaje_3.addFeatures(features_Reddedrenaje_3);
var lyr_Reddedrenaje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reddedrenaje_3, 
                style: style_Reddedrenaje_3,
                popuplayertitle: 'Red de drenaje',
                interactive: true,
    title: 'Red de drenaje<br />\
    <img src="styles/legend/Reddedrenaje_3_0.png" /> 250 mm<br />\
    <img src="styles/legend/Reddedrenaje_3_1.png" /> 300 mm<br />\
    <img src="styles/legend/Reddedrenaje_3_2.png" /> 500 mm<br />' });
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
    <img src="styles/legend/Edificaciones_4_2.png" /> Medio<br />' });
var format_limite_parroquia_5 = new ol.format.GeoJSON();
var features_limite_parroquia_5 = format_limite_parroquia_5.readFeatures(json_limite_parroquia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_parroquia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_parroquia_5.addFeatures(features_limite_parroquia_5);
var lyr_limite_parroquia_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_parroquia_5, 
                style: style_limite_parroquia_5,
                popuplayertitle: 'limite_parroquia',
                interactive: true,
                title: '<img src="styles/legend/limite_parroquia_5.png" /> limite_parroquia'
            });
var format_RioZarumilla_6 = new ol.format.GeoJSON();
var features_RioZarumilla_6 = format_RioZarumilla_6.readFeatures(json_RioZarumilla_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RioZarumilla_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RioZarumilla_6.addFeatures(features_RioZarumilla_6);
var lyr_RioZarumilla_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RioZarumilla_6, 
                style: style_RioZarumilla_6,
                popuplayertitle: 'Rio Zarumilla',
                interactive: true,
                title: '<img src="styles/legend/RioZarumilla_6.png" /> Rio Zarumilla'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Areas_inundadas_1.setVisible(true);lyr_Vias_inundables_2.setVisible(true);lyr_Reddedrenaje_3.setVisible(true);lyr_Edificaciones_4.setVisible(true);lyr_limite_parroquia_5.setVisible(true);lyr_RioZarumilla_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Areas_inundadas_1,lyr_Vias_inundables_2,lyr_Reddedrenaje_3,lyr_Edificaciones_4,lyr_limite_parroquia_5,lyr_RioZarumilla_6];
lyr_Areas_inundadas_1.set('fieldAliases', {'fid': 'fid', 'nivel_riesgo': 'nivel_riesgo', 'area_m2': 'area_m2', 'tipo_riesgo': 'tipo_riesgo', 'problema': 'problema', 'tipo_suelo': 'tipo_suelo', 'area_id': 'area_id', });
lyr_Vias_inundables_2.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'nivel_riesgo': 'nivel_riesgo', 'tipo_via': 'tipo_via', 'longitud': 'longitud', });
lyr_Reddedrenaje_3.set('fieldAliases', {'fid': 'fid', 'material': 'material', 'tipo': 'tipo', 'diametro': 'diametro', 'Estado': 'Estado', });
lyr_Edificaciones_4.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'nivel_riesgo': 'nivel_riesgo', 'estado_estructural': 'estado_estructural', });
lyr_limite_parroquia_5.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Area_m2': 'Area_m2', 'Poblacion afectada': 'Poblacion afectada', });
lyr_RioZarumilla_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_flujo': 'tipo_flujo', 'Influencia': 'Influencia', 'Caudal_medio': 'Caudal_medio', 'Estado': 'Estado', });
lyr_Areas_inundadas_1.set('fieldImages', {'fid': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'area_m2': 'TextEdit', 'tipo_riesgo': 'TextEdit', 'problema': 'TextEdit', 'tipo_suelo': 'TextEdit', 'area_id': 'TextEdit', });
lyr_Vias_inundables_2.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'tipo_via': 'TextEdit', 'longitud': 'TextEdit', });
lyr_Reddedrenaje_3.set('fieldImages', {'fid': 'TextEdit', 'material': 'TextEdit', 'tipo': 'TextEdit', 'diametro': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Edificaciones_4.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'nivel_riesgo': 'TextEdit', 'estado_estructural': 'TextEdit', });
lyr_limite_parroquia_5.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Area_m2': 'TextEdit', 'Poblacion afectada': 'TextEdit', });
lyr_RioZarumilla_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_flujo': 'TextEdit', 'Influencia': 'TextEdit', 'Caudal_medio': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Areas_inundadas_1.set('fieldLabels', {'fid': 'hidden field', 'nivel_riesgo': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', 'tipo_riesgo': 'inline label - visible with data', 'problema': 'inline label - visible with data', 'tipo_suelo': 'inline label - visible with data', 'area_id': 'inline label - visible with data', });
lyr_Vias_inundables_2.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - visible with data', 'nivel_riesgo': 'inline label - visible with data', 'tipo_via': 'inline label - visible with data', 'longitud': 'inline label - visible with data', });
lyr_Reddedrenaje_3.set('fieldLabels', {'fid': 'hidden field', 'material': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'diametro': 'inline label - visible with data', 'Estado': 'inline label - visible with data', });
lyr_Edificaciones_4.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'nivel_riesgo': 'inline label - visible with data', 'estado_estructural': 'inline label - visible with data', });
lyr_limite_parroquia_5.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'inline label - visible with data', 'Area_m2': 'inline label - visible with data', 'Poblacion afectada': 'inline label - always visible', });
lyr_RioZarumilla_6.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'tipo_flujo': 'inline label - visible with data', 'Influencia': 'inline label - visible with data', 'Caudal_medio': 'inline label - visible with data', 'Estado': 'inline label - visible with data', });
lyr_RioZarumilla_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});