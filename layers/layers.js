var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LIMITEMUNICIPAL_1 = new ol.format.GeoJSON();
var features_LIMITEMUNICIPAL_1 = format_LIMITEMUNICIPAL_1.readFeatures(json_LIMITEMUNICIPAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITEMUNICIPAL_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LIMITEMUNICIPAL_1.addFeatures(features_LIMITEMUNICIPAL_1);var lyr_LIMITEMUNICIPAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITEMUNICIPAL_1, 
                style: style_LIMITEMUNICIPAL_1,
                title: '<img src="styles/legend/LIMITEMUNICIPAL_1.png" /> LIMITE MUNICIPAL'
            });var format_AREAURBANA_2 = new ol.format.GeoJSON();
var features_AREAURBANA_2 = format_AREAURBANA_2.readFeatures(json_AREAURBANA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAURBANA_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_AREAURBANA_2.addFeatures(features_AREAURBANA_2);var lyr_AREAURBANA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREAURBANA_2, 
                style: style_AREAURBANA_2,
                title: '<img src="styles/legend/AREAURBANA_2.png" /> AREA URBANA'
            });var format_CICLOVIASEXISTENTES_3 = new ol.format.GeoJSON();
var features_CICLOVIASEXISTENTES_3 = format_CICLOVIASEXISTENTES_3.readFeatures(json_CICLOVIASEXISTENTES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CICLOVIASEXISTENTES_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CICLOVIASEXISTENTES_3.addFeatures(features_CICLOVIASEXISTENTES_3);var lyr_CICLOVIASEXISTENTES_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CICLOVIASEXISTENTES_3, 
                style: style_CICLOVIASEXISTENTES_3,
                title: '<img src="styles/legend/CICLOVIASEXISTENTES_3.png" /> CICLOVIAS EXISTENTES'
            });var format_CICLOVIASPROPUESTAS_4 = new ol.format.GeoJSON();
var features_CICLOVIASPROPUESTAS_4 = format_CICLOVIASPROPUESTAS_4.readFeatures(json_CICLOVIASPROPUESTAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CICLOVIASPROPUESTAS_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CICLOVIASPROPUESTAS_4.addFeatures(features_CICLOVIASPROPUESTAS_4);var lyr_CICLOVIASPROPUESTAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CICLOVIASPROPUESTAS_4, 
                style: style_CICLOVIASPROPUESTAS_4,
                title: '<img src="styles/legend/CICLOVIASPROPUESTAS_4.png" /> CICLOVIAS PROPUESTAS'
            });var format_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5 = new ol.format.GeoJSON();
var features_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5 = format_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.readFeatures(json_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.addFeatures(features_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5);var lyr_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5, 
                style: style_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5,
                title: '<img src="styles/legend/CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.png" /> CICLOESTACIONAMIENTOS - Existentes SBP HUIZI'
            });var format_CICLOESTACIONAMIENTOSPROPUESTOS_6 = new ol.format.GeoJSON();
var features_CICLOESTACIONAMIENTOSPROPUESTOS_6 = format_CICLOESTACIONAMIENTOSPROPUESTOS_6.readFeatures(json_CICLOESTACIONAMIENTOSPROPUESTOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CICLOESTACIONAMIENTOSPROPUESTOS_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CICLOESTACIONAMIENTOSPROPUESTOS_6.addFeatures(features_CICLOESTACIONAMIENTOSPROPUESTOS_6);var lyr_CICLOESTACIONAMIENTOSPROPUESTOS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CICLOESTACIONAMIENTOSPROPUESTOS_6, 
                style: style_CICLOESTACIONAMIENTOSPROPUESTOS_6,
                title: '<img src="styles/legend/CICLOESTACIONAMIENTOSPROPUESTOS_6.png" /> CICLOESTACIONAMIENTOS - PROPUESTOS'
            });var format_CORREDORESURBANOS_7 = new ol.format.GeoJSON();
var features_CORREDORESURBANOS_7 = format_CORREDORESURBANOS_7.readFeatures(json_CORREDORESURBANOS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CORREDORESURBANOS_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CORREDORESURBANOS_7.addFeatures(features_CORREDORESURBANOS_7);var lyr_CORREDORESURBANOS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CORREDORESURBANOS_7, 
                style: style_CORREDORESURBANOS_7,
    title: 'CORREDORES URBANOS:<br />\
    <img src="styles/legend/CORREDORESURBANOS_7_0.png" /> CRU Metropolitano verticalizacion-consolidacion<br />\
    <img src="styles/legend/CORREDORESURBANOS_7_1.png" /> CRU Especialización<br />\
    <img src="styles/legend/CORREDORESURBANOS_7_2.png" /> CRU Integración<br />\
    <img src="styles/legend/CORREDORESURBANOS_7_3.png" /> CRU Locales<br />'
        });var format_FLUJOSVEHICULARES1_8 = new ol.format.GeoJSON();
var features_FLUJOSVEHICULARES1_8 = format_FLUJOSVEHICULARES1_8.readFeatures(json_FLUJOSVEHICULARES1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FLUJOSVEHICULARES1_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_FLUJOSVEHICULARES1_8.addFeatures(features_FLUJOSVEHICULARES1_8);var lyr_FLUJOSVEHICULARES1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FLUJOSVEHICULARES1_8, 
                style: style_FLUJOSVEHICULARES1_8,
    title: 'FLUJOS VEHICULARES-1<br />\
    <img src="styles/legend/FLUJOSVEHICULARES1_8_0.png" /> Flujo vial <br />\
    <img src="styles/legend/FLUJOSVEHICULARES1_8_1.png" /> Linea de flujo vial <br />\
    <img src="styles/legend/FLUJOSVEHICULARES1_8_2.png" /> Terminal<br />\
    <img src="styles/legend/FLUJOSVEHICULARES1_8_3.png" /> Concentración de flujos<br />'
        });var format_INFRAESTRUCTURAHIDRICASANITARIA_9 = new ol.format.GeoJSON();
var features_INFRAESTRUCTURAHIDRICASANITARIA_9 = format_INFRAESTRUCTURAHIDRICASANITARIA_9.readFeatures(json_INFRAESTRUCTURAHIDRICASANITARIA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRAESTRUCTURAHIDRICASANITARIA_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_INFRAESTRUCTURAHIDRICASANITARIA_9.addFeatures(features_INFRAESTRUCTURAHIDRICASANITARIA_9);var lyr_INFRAESTRUCTURAHIDRICASANITARIA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFRAESTRUCTURAHIDRICASANITARIA_9, 
                style: style_INFRAESTRUCTURAHIDRICASANITARIA_9,
                title: '<img src="styles/legend/INFRAESTRUCTURAHIDRICASANITARIA_9.png" /> INFRAESTRUCTURA HIDRICA-SANITARIA'
            });var format_INFRAESTRUCTURAELECTRICA_10 = new ol.format.GeoJSON();
var features_INFRAESTRUCTURAELECTRICA_10 = format_INFRAESTRUCTURAELECTRICA_10.readFeatures(json_INFRAESTRUCTURAELECTRICA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRAESTRUCTURAELECTRICA_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_INFRAESTRUCTURAELECTRICA_10.addFeatures(features_INFRAESTRUCTURAELECTRICA_10);var lyr_INFRAESTRUCTURAELECTRICA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INFRAESTRUCTURAELECTRICA_10, 
                style: style_INFRAESTRUCTURAELECTRICA_10,
                title: '<img src="styles/legend/INFRAESTRUCTURAELECTRICA_10.png" /> INFRAESTRUCTURA ELECTRICA '
            });var format_REDDEAGUAPOTABLE_11 = new ol.format.GeoJSON();
var features_REDDEAGUAPOTABLE_11 = format_REDDEAGUAPOTABLE_11.readFeatures(json_REDDEAGUAPOTABLE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDDEAGUAPOTABLE_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_REDDEAGUAPOTABLE_11.addFeatures(features_REDDEAGUAPOTABLE_11);var lyr_REDDEAGUAPOTABLE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REDDEAGUAPOTABLE_11, 
                style: style_REDDEAGUAPOTABLE_11,
                title: '<img src="styles/legend/REDDEAGUAPOTABLE_11.png" /> RED DE AGUA POTABLE'
            });var format_RIESGOSFALLAS_12 = new ol.format.GeoJSON();
var features_RIESGOSFALLAS_12 = format_RIESGOSFALLAS_12.readFeatures(json_RIESGOSFALLAS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIESGOSFALLAS_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RIESGOSFALLAS_12.addFeatures(features_RIESGOSFALLAS_12);var lyr_RIESGOSFALLAS_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIESGOSFALLAS_12, 
                style: style_RIESGOSFALLAS_12,
                title: '<img src="styles/legend/RIESGOSFALLAS_12.png" /> RIESGOS FALLAS'
            });var format_EQUIPAMIENTOCONCLAVE_13 = new ol.format.GeoJSON();
var features_EQUIPAMIENTOCONCLAVE_13 = format_EQUIPAMIENTOCONCLAVE_13.readFeatures(json_EQUIPAMIENTOCONCLAVE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EQUIPAMIENTOCONCLAVE_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EQUIPAMIENTOCONCLAVE_13.addFeatures(features_EQUIPAMIENTOCONCLAVE_13);var lyr_EQUIPAMIENTOCONCLAVE_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EQUIPAMIENTOCONCLAVE_13, 
                style: style_EQUIPAMIENTOCONCLAVE_13,
                title: '<img src="styles/legend/EQUIPAMIENTOCONCLAVE_13.png" /> EQUIPAMIENTO-CON CLAVE'
            });var format_CONJUNTOSURBANOS_14 = new ol.format.GeoJSON();
var features_CONJUNTOSURBANOS_14 = format_CONJUNTOSURBANOS_14.readFeatures(json_CONJUNTOSURBANOS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONJUNTOSURBANOS_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CONJUNTOSURBANOS_14.addFeatures(features_CONJUNTOSURBANOS_14);var lyr_CONJUNTOSURBANOS_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONJUNTOSURBANOS_14, 
                style: style_CONJUNTOSURBANOS_14,
    title: 'CONJUNTOS URBANOS<br />\
    <img src="styles/legend/CONJUNTOSURBANOS_14_0.png" /> CONJUNTOS URBANOS<br />\
    <img src="styles/legend/CONJUNTOSURBANOS_14_1.png" /> FRACCIONAMIENTO<br />\
    <img src="styles/legend/CONJUNTOSURBANOS_14_2.png" /> LOT<br />\
    <img src="styles/legend/CONJUNTOSURBANOS_14_3.png" /> SUB-DIV<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_LIMITEMUNICIPAL_1.setVisible(true);lyr_AREAURBANA_2.setVisible(true);lyr_CICLOVIASEXISTENTES_3.setVisible(true);lyr_CICLOVIASPROPUESTAS_4.setVisible(true);lyr_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.setVisible(true);lyr_CICLOESTACIONAMIENTOSPROPUESTOS_6.setVisible(true);lyr_CORREDORESURBANOS_7.setVisible(true);lyr_FLUJOSVEHICULARES1_8.setVisible(true);lyr_INFRAESTRUCTURAHIDRICASANITARIA_9.setVisible(true);lyr_INFRAESTRUCTURAELECTRICA_10.setVisible(true);lyr_REDDEAGUAPOTABLE_11.setVisible(true);lyr_RIESGOSFALLAS_12.setVisible(true);lyr_EQUIPAMIENTOCONCLAVE_13.setVisible(true);lyr_CONJUNTOSURBANOS_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LIMITEMUNICIPAL_1,lyr_AREAURBANA_2,lyr_CICLOVIASEXISTENTES_3,lyr_CICLOVIASPROPUESTAS_4,lyr_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5,lyr_CICLOESTACIONAMIENTOSPROPUESTOS_6,lyr_CORREDORESURBANOS_7,lyr_FLUJOSVEHICULARES1_8,lyr_INFRAESTRUCTURAHIDRICASANITARIA_9,lyr_INFRAESTRUCTURAELECTRICA_10,lyr_REDDEAGUAPOTABLE_11,lyr_RIESGOSFALLAS_12,lyr_EQUIPAMIENTOCONCLAVE_13,lyr_CONJUNTOSURBANOS_14];
lyr_LIMITEMUNICIPAL_1.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_AREAURBANA_2.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_CICLOVIASEXISTENTES_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CICLOVIASPROPUESTAS_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CICLOESTACIONAMIENTOSPROPUESTOS_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CORREDORESURBANOS_7.set('fieldAliases', {'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'ROTATION': 'ROTATION', 'SIZE': 'SIZE', 'THICKNESS': 'THICKNESS', 'TRUECOLOR': 'TRUECOLOR', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', });
lyr_FLUJOSVEHICULARES1_8.set('fieldAliases', {'ANGLE': 'ANGLE', 'AREA': 'AREA', 'BLOCKNAME': 'BLOCKNAME', 'BULGE': 'BULGE', 'CENTER': 'CENTER', 'CENTROID': 'CENTROID', 'CLASSNAME': 'CLASSNAME', 'COLOR': 'COLOR', 'DWGNAME': 'DWGNAME', 'EANGLE': 'EANGLE', 'EHANDLE': 'EHANDLE', 'ELEVATION': 'ELEVATION', 'EWIDTH': 'EWIDTH', 'HEIGHT': 'HEIGHT', 'IMAGENAME': 'IMAGENAME', 'LABELPT': 'LABELPT', 'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'LINETYPE': 'LINETYPE', 'LINEWEIGHT': 'LINEWEIGHT', 'LOCKSTAT': 'LOCKSTAT', 'PLOTSTYLE': 'PLOTSTYLE', 'RADIUS': 'RADIUS', 'ROTATION': 'ROTATION', 'SANGLE': 'SANGLE', 'SHAPENAME': 'SHAPENAME', 'SIZE': 'SIZE', 'STRING': 'STRING', 'STYLE': 'STYLE', 'SWIDTH': 'SWIDTH', 'TAG': 'TAG', 'THICKNESS': 'THICKNESS', 'TRUECOLOR': 'TRUECOLOR', 'TYPE': 'TYPE', 'URL': 'URL', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'X2_Y2_Z2': 'X2_Y2_Z2', 'X2': 'X2', 'Y2': 'Y2', 'Z2': 'Z2', 'X3_Y3_Z3': 'X3_Y3_Z3', 'X3': 'X3', 'Y3': 'Y3', 'Z3': 'Z3', 'X4_Y4_Z4': 'X4_Y4_Z4', 'X4': 'X4', 'Y4': 'Y4', 'Z4': 'Z4', 'XSCALE': 'XSCALE', 'YSCALE': 'YSCALE', 'ZSCALE': 'ZSCALE', });
lyr_INFRAESTRUCTURAHIDRICASANITARIA_9.set('fieldAliases', {'ANGLE': 'ANGLE', 'AREA': 'AREA', 'BLOCKNAME': 'BLOCKNAME', 'BULGE': 'BULGE', 'CENTER': 'CENTER', 'CENTROID': 'CENTROID', 'CLASSNAME': 'CLASSNAME', 'COLOR': 'COLOR', 'DWGNAME': 'DWGNAME', 'EANGLE': 'EANGLE', 'EHANDLE': 'EHANDLE', 'ELEVATION': 'ELEVATION', 'EWIDTH': 'EWIDTH', 'HEIGHT': 'HEIGHT', 'IMAGENAME': 'IMAGENAME', 'LABELPT': 'LABELPT', 'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'LINETYPE': 'LINETYPE', 'LINEWEIGHT': 'LINEWEIGHT', 'LOCKSTAT': 'LOCKSTAT', 'PLOTSTYLE': 'PLOTSTYLE', 'RADIUS': 'RADIUS', 'ROTATION': 'ROTATION', 'SANGLE': 'SANGLE', 'SHAPENAME': 'SHAPENAME', 'SIZE': 'SIZE', 'STRING': 'STRING', 'STYLE': 'STYLE', 'SWIDTH': 'SWIDTH', 'TAG': 'TAG', 'THICKNESS': 'THICKNESS', 'TRUECOLOR': 'TRUECOLOR', 'TYPE': 'TYPE', 'URL': 'URL', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'X2_Y2_Z2': 'X2_Y2_Z2', 'X2': 'X2', 'Y2': 'Y2', 'Z2': 'Z2', 'X3_Y3_Z3': 'X3_Y3_Z3', 'X3': 'X3', 'Y3': 'Y3', 'Z3': 'Z3', 'X4_Y4_Z4': 'X4_Y4_Z4', 'X4': 'X4', 'Y4': 'Y4', 'Z4': 'Z4', 'XSCALE': 'XSCALE', 'YSCALE': 'YSCALE', 'ZSCALE': 'ZSCALE', });
lyr_INFRAESTRUCTURAELECTRICA_10.set('fieldAliases', {'COLOR': 'COLOR', 'LAYER': 'LAYER', });
lyr_REDDEAGUAPOTABLE_11.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_RIESGOSFALLAS_12.set('fieldAliases', {'ANGLE': 'ANGLE', 'AREA': 'AREA', 'BLOCKNAME': 'BLOCKNAME', 'BULGE': 'BULGE', 'CENTER': 'CENTER', 'CENTROID': 'CENTROID', 'CLASSNAME': 'CLASSNAME', 'COLOR': 'COLOR', 'DWGNAME': 'DWGNAME', 'EANGLE': 'EANGLE', 'EHANDLE': 'EHANDLE', 'ELEVATION': 'ELEVATION', 'EWIDTH': 'EWIDTH', 'HEIGHT': 'HEIGHT', 'IMAGENAME': 'IMAGENAME', 'LABELPT': 'LABELPT', 'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'LINETYPE': 'LINETYPE', 'LINEWEIGHT': 'LINEWEIGHT', 'LOCKSTAT': 'LOCKSTAT', 'PLOTSTYLE': 'PLOTSTYLE', 'RADIUS': 'RADIUS', 'ROTATION': 'ROTATION', 'SANGLE': 'SANGLE', 'SHAPENAME': 'SHAPENAME', 'SIZE': 'SIZE', 'STRING': 'STRING', 'STYLE': 'STYLE', 'SWIDTH': 'SWIDTH', 'TAG': 'TAG', 'THICKNESS': 'THICKNESS', 'TRUECOLOR': 'TRUECOLOR', 'TYPE': 'TYPE', 'URL': 'URL', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'X2_Y2_Z2': 'X2_Y2_Z2', 'X2': 'X2', 'Y2': 'Y2', 'Z2': 'Z2', 'X3_Y3_Z3': 'X3_Y3_Z3', 'X3': 'X3', 'Y3': 'Y3', 'Z3': 'Z3', 'X4_Y4_Z4': 'X4_Y4_Z4', 'X4': 'X4', 'Y4': 'Y4', 'Z4': 'Z4', 'XSCALE': 'XSCALE', 'YSCALE': 'YSCALE', 'ZSCALE': 'ZSCALE', });
lyr_EQUIPAMIENTOCONCLAVE_13.set('fieldAliases', {'LAYER': 'LAYER', 'CLAVE': 'CLAVE', 'USO': 'USO', 'AREA': 'AREA', });
lyr_CONJUNTOSURBANOS_14.set('fieldAliases', {'LAYER': 'LAYER', 'NOMBRE': 'NOMBRE', 'CLAVE': 'CLAVE', 'CLAVE_2': 'CLAVE_2', 'AREA': 'AREA', });
lyr_LIMITEMUNICIPAL_1.set('fieldImages', {'FID_': '', 'Entity': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', });
lyr_AREAURBANA_2.set('fieldImages', {'FID_': '', 'Entity': '', 'Layer': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', });
lyr_CICLOVIASEXISTENTES_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CICLOVIASPROPUESTAS_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CICLOESTACIONAMIENTOSPROPUESTOS_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_CORREDORESURBANOS_7.set('fieldImages', {'LAYER': '', 'LENGTH': '', 'ROTATION': '', 'SIZE': '', 'THICKNESS': '', 'TRUECOLOR': '', 'TIPO': '', 'NOMBRE': '', });
lyr_FLUJOSVEHICULARES1_8.set('fieldImages', {'ANGLE': '', 'AREA': '', 'BLOCKNAME': '', 'BULGE': '', 'CENTER': '', 'CENTROID': '', 'CLASSNAME': '', 'COLOR': '', 'DWGNAME': '', 'EANGLE': '', 'EHANDLE': '', 'ELEVATION': '', 'EWIDTH': '', 'HEIGHT': '', 'IMAGENAME': '', 'LABELPT': '', 'LAYER': '', 'LENGTH': '', 'LINETYPE': '', 'LINEWEIGHT': '', 'LOCKSTAT': '', 'PLOTSTYLE': '', 'RADIUS': '', 'ROTATION': '', 'SANGLE': '', 'SHAPENAME': '', 'SIZE': '', 'STRING': '', 'STYLE': '', 'SWIDTH': '', 'TAG': '', 'THICKNESS': '', 'TRUECOLOR': '', 'TYPE': '', 'URL': '', 'X1_Y1_Z1': '', 'X1': '', 'Y1': '', 'Z1': '', 'X2_Y2_Z2': '', 'X2': '', 'Y2': '', 'Z2': '', 'X3_Y3_Z3': '', 'X3': '', 'Y3': '', 'Z3': '', 'X4_Y4_Z4': '', 'X4': '', 'Y4': '', 'Z4': '', 'XSCALE': '', 'YSCALE': '', 'ZSCALE': '', });
lyr_INFRAESTRUCTURAHIDRICASANITARIA_9.set('fieldImages', {'ANGLE': '', 'AREA': '', 'BLOCKNAME': '', 'BULGE': '', 'CENTER': '', 'CENTROID': '', 'CLASSNAME': '', 'COLOR': '', 'DWGNAME': '', 'EANGLE': '', 'EHANDLE': '', 'ELEVATION': '', 'EWIDTH': '', 'HEIGHT': '', 'IMAGENAME': '', 'LABELPT': '', 'LAYER': '', 'LENGTH': '', 'LINETYPE': '', 'LINEWEIGHT': '', 'LOCKSTAT': '', 'PLOTSTYLE': '', 'RADIUS': '', 'ROTATION': '', 'SANGLE': '', 'SHAPENAME': '', 'SIZE': '', 'STRING': '', 'STYLE': '', 'SWIDTH': '', 'TAG': '', 'THICKNESS': '', 'TRUECOLOR': '', 'TYPE': '', 'URL': '', 'X1_Y1_Z1': '', 'X1': '', 'Y1': '', 'Z1': '', 'X2_Y2_Z2': '', 'X2': '', 'Y2': '', 'Z2': '', 'X3_Y3_Z3': '', 'X3': '', 'Y3': '', 'Z3': '', 'X4_Y4_Z4': '', 'X4': '', 'Y4': '', 'Z4': '', 'XSCALE': '', 'YSCALE': '', 'ZSCALE': '', });
lyr_INFRAESTRUCTURAELECTRICA_10.set('fieldImages', {'COLOR': '', 'LAYER': '', });
lyr_REDDEAGUAPOTABLE_11.set('fieldImages', {'LAYER': '', });
lyr_RIESGOSFALLAS_12.set('fieldImages', {'ANGLE': '', 'AREA': '', 'BLOCKNAME': '', 'BULGE': '', 'CENTER': '', 'CENTROID': '', 'CLASSNAME': '', 'COLOR': '', 'DWGNAME': '', 'EANGLE': '', 'EHANDLE': '', 'ELEVATION': '', 'EWIDTH': '', 'HEIGHT': '', 'IMAGENAME': '', 'LABELPT': '', 'LAYER': '', 'LENGTH': '', 'LINETYPE': '', 'LINEWEIGHT': '', 'LOCKSTAT': '', 'PLOTSTYLE': '', 'RADIUS': '', 'ROTATION': '', 'SANGLE': '', 'SHAPENAME': '', 'SIZE': '', 'STRING': '', 'STYLE': '', 'SWIDTH': '', 'TAG': '', 'THICKNESS': '', 'TRUECOLOR': '', 'TYPE': '', 'URL': '', 'X1_Y1_Z1': '', 'X1': '', 'Y1': '', 'Z1': '', 'X2_Y2_Z2': '', 'X2': '', 'Y2': '', 'Z2': '', 'X3_Y3_Z3': '', 'X3': '', 'Y3': '', 'Z3': '', 'X4_Y4_Z4': '', 'X4': '', 'Y4': '', 'Z4': '', 'XSCALE': '', 'YSCALE': '', 'ZSCALE': '', });
lyr_EQUIPAMIENTOCONCLAVE_13.set('fieldImages', {'LAYER': '', 'CLAVE': '', 'USO': '', 'AREA': '', });
lyr_CONJUNTOSURBANOS_14.set('fieldImages', {'LAYER': '', 'NOMBRE': '', 'CLAVE': '', 'CLAVE_2': '', 'AREA': '', });
lyr_LIMITEMUNICIPAL_1.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_AREAURBANA_2.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_CICLOVIASEXISTENTES_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CICLOVIASPROPUESTAS_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CICLOESTACIONAMIENTOSExistentesSBPHUIZI_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CICLOESTACIONAMIENTOSPROPUESTOS_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_CORREDORESURBANOS_7.set('fieldLabels', {'LAYER': 'no label', 'LENGTH': 'no label', 'ROTATION': 'no label', 'SIZE': 'no label', 'THICKNESS': 'no label', 'TRUECOLOR': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', });
lyr_FLUJOSVEHICULARES1_8.set('fieldLabels', {'ANGLE': 'no label', 'AREA': 'no label', 'BLOCKNAME': 'no label', 'BULGE': 'no label', 'CENTER': 'no label', 'CENTROID': 'no label', 'CLASSNAME': 'no label', 'COLOR': 'no label', 'DWGNAME': 'no label', 'EANGLE': 'no label', 'EHANDLE': 'no label', 'ELEVATION': 'no label', 'EWIDTH': 'no label', 'HEIGHT': 'no label', 'IMAGENAME': 'no label', 'LABELPT': 'no label', 'LAYER': 'no label', 'LENGTH': 'no label', 'LINETYPE': 'no label', 'LINEWEIGHT': 'no label', 'LOCKSTAT': 'no label', 'PLOTSTYLE': 'no label', 'RADIUS': 'no label', 'ROTATION': 'no label', 'SANGLE': 'no label', 'SHAPENAME': 'no label', 'SIZE': 'no label', 'STRING': 'no label', 'STYLE': 'no label', 'SWIDTH': 'no label', 'TAG': 'no label', 'THICKNESS': 'no label', 'TRUECOLOR': 'no label', 'TYPE': 'no label', 'URL': 'no label', 'X1_Y1_Z1': 'no label', 'X1': 'no label', 'Y1': 'no label', 'Z1': 'no label', 'X2_Y2_Z2': 'no label', 'X2': 'no label', 'Y2': 'no label', 'Z2': 'no label', 'X3_Y3_Z3': 'no label', 'X3': 'no label', 'Y3': 'no label', 'Z3': 'no label', 'X4_Y4_Z4': 'no label', 'X4': 'no label', 'Y4': 'no label', 'Z4': 'no label', 'XSCALE': 'no label', 'YSCALE': 'no label', 'ZSCALE': 'no label', });
lyr_INFRAESTRUCTURAHIDRICASANITARIA_9.set('fieldLabels', {'ANGLE': 'no label', 'AREA': 'no label', 'BLOCKNAME': 'no label', 'BULGE': 'no label', 'CENTER': 'no label', 'CENTROID': 'no label', 'CLASSNAME': 'no label', 'COLOR': 'no label', 'DWGNAME': 'no label', 'EANGLE': 'no label', 'EHANDLE': 'no label', 'ELEVATION': 'no label', 'EWIDTH': 'no label', 'HEIGHT': 'no label', 'IMAGENAME': 'no label', 'LABELPT': 'no label', 'LAYER': 'no label', 'LENGTH': 'no label', 'LINETYPE': 'no label', 'LINEWEIGHT': 'no label', 'LOCKSTAT': 'no label', 'PLOTSTYLE': 'no label', 'RADIUS': 'no label', 'ROTATION': 'no label', 'SANGLE': 'no label', 'SHAPENAME': 'no label', 'SIZE': 'no label', 'STRING': 'no label', 'STYLE': 'no label', 'SWIDTH': 'no label', 'TAG': 'no label', 'THICKNESS': 'no label', 'TRUECOLOR': 'no label', 'TYPE': 'no label', 'URL': 'no label', 'X1_Y1_Z1': 'no label', 'X1': 'no label', 'Y1': 'no label', 'Z1': 'no label', 'X2_Y2_Z2': 'no label', 'X2': 'no label', 'Y2': 'no label', 'Z2': 'no label', 'X3_Y3_Z3': 'no label', 'X3': 'no label', 'Y3': 'no label', 'Z3': 'no label', 'X4_Y4_Z4': 'no label', 'X4': 'no label', 'Y4': 'no label', 'Z4': 'no label', 'XSCALE': 'no label', 'YSCALE': 'no label', 'ZSCALE': 'no label', });
lyr_INFRAESTRUCTURAELECTRICA_10.set('fieldLabels', {'COLOR': 'no label', 'LAYER': 'no label', });
lyr_REDDEAGUAPOTABLE_11.set('fieldLabels', {'LAYER': 'no label', });
lyr_RIESGOSFALLAS_12.set('fieldLabels', {'ANGLE': 'no label', 'AREA': 'no label', 'BLOCKNAME': 'no label', 'BULGE': 'no label', 'CENTER': 'no label', 'CENTROID': 'no label', 'CLASSNAME': 'no label', 'COLOR': 'no label', 'DWGNAME': 'no label', 'EANGLE': 'no label', 'EHANDLE': 'no label', 'ELEVATION': 'no label', 'EWIDTH': 'no label', 'HEIGHT': 'no label', 'IMAGENAME': 'no label', 'LABELPT': 'no label', 'LAYER': 'no label', 'LENGTH': 'no label', 'LINETYPE': 'no label', 'LINEWEIGHT': 'no label', 'LOCKSTAT': 'no label', 'PLOTSTYLE': 'no label', 'RADIUS': 'no label', 'ROTATION': 'no label', 'SANGLE': 'no label', 'SHAPENAME': 'no label', 'SIZE': 'no label', 'STRING': 'no label', 'STYLE': 'no label', 'SWIDTH': 'no label', 'TAG': 'no label', 'THICKNESS': 'no label', 'TRUECOLOR': 'no label', 'TYPE': 'no label', 'URL': 'no label', 'X1_Y1_Z1': 'no label', 'X1': 'no label', 'Y1': 'no label', 'Z1': 'no label', 'X2_Y2_Z2': 'no label', 'X2': 'no label', 'Y2': 'no label', 'Z2': 'no label', 'X3_Y3_Z3': 'no label', 'X3': 'no label', 'Y3': 'no label', 'Z3': 'no label', 'X4_Y4_Z4': 'no label', 'X4': 'no label', 'Y4': 'no label', 'Z4': 'no label', 'XSCALE': 'no label', 'YSCALE': 'no label', 'ZSCALE': 'no label', });
lyr_EQUIPAMIENTOCONCLAVE_13.set('fieldLabels', {'LAYER': 'no label', 'CLAVE': 'no label', 'USO': 'no label', 'AREA': 'no label', });
lyr_CONJUNTOSURBANOS_14.set('fieldLabels', {'LAYER': 'no label', 'NOMBRE': 'no label', 'CLAVE': 'no label', 'CLAVE_2': 'no label', 'AREA': 'no label', });
lyr_CONJUNTOSURBANOS_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});