var size = 0;
var placement = 'point';
function categories_Reddedrenaje_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '250 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,223,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '300 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,174,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '500 mm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,52,255,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Reddedrenaje_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("diametro");
    var labelFont = "13.0px \'Arial Narrow\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("tipo") !== null) {
        labelText = String(feature.get("tipo"));
    }
    
    var style = categories_Reddedrenaje_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
