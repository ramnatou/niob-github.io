var wms_layers = [];
var format_PEDOLOGIE_0 = new ol.format.GeoJSON();
var features_PEDOLOGIE_0 = format_PEDOLOGIE_0.readFeatures(json_PEDOLOGIE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEDOLOGIE_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PEDOLOGIE_0.addFeatures(features_PEDOLOGIE_0);var lyr_PEDOLOGIE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEDOLOGIE_0, 
                style: style_PEDOLOGIE_0,
    title: 'PEDOLOGIE<br />\
    <img src="styles/legend/PEDOLOGIE_0_0.png" /> Modelé atténué avec des mares non alignés -  sols ferrugineux tropicaux non ou peu lessivés<br />\
    <img src="styles/legend/PEDOLOGIE_0_1.png" /> Sols peu évolués d\'apport<br />'
        });var format_COMMUNE_NDIOB_1 = new ol.format.GeoJSON();
var features_COMMUNE_NDIOB_1 = format_COMMUNE_NDIOB_1.readFeatures(json_COMMUNE_NDIOB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_NDIOB_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_COMMUNE_NDIOB_1.addFeatures(features_COMMUNE_NDIOB_1);var lyr_COMMUNE_NDIOB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_NDIOB_1, 
                style: style_COMMUNE_NDIOB_1,
                title: '<img src="styles/legend/COMMUNE_NDIOB_1.png" /> COMMUNE_NDIOB'
            });var format_RESEAU_ROUTIER_2 = new ol.format.GeoJSON();
var features_RESEAU_ROUTIER_2 = format_RESEAU_ROUTIER_2.readFeatures(json_RESEAU_ROUTIER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESEAU_ROUTIER_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RESEAU_ROUTIER_2.addFeatures(features_RESEAU_ROUTIER_2);var lyr_RESEAU_ROUTIER_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESEAU_ROUTIER_2, 
                style: style_RESEAU_ROUTIER_2,
                title: '<img src="styles/legend/RESEAU_ROUTIER_2.png" /> RESEAU_ROUTIER'
            });var format_FORETS_3 = new ol.format.GeoJSON();
var features_FORETS_3 = format_FORETS_3.readFeatures(json_FORETS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FORETS_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_FORETS_3.addFeatures(features_FORETS_3);var lyr_FORETS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FORETS_3, 
                style: style_FORETS_3,
                title: '<img src="styles/legend/FORETS_3.png" /> FORETS'
            });var format_NATIONALE_4_4 = new ol.format.GeoJSON();
var features_NATIONALE_4_4 = format_NATIONALE_4_4.readFeatures(json_NATIONALE_4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NATIONALE_4_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NATIONALE_4_4.addFeatures(features_NATIONALE_4_4);var lyr_NATIONALE_4_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NATIONALE_4_4, 
                style: style_NATIONALE_4_4,
                title: '<img src="styles/legend/NATIONALE_4_4.png" /> NATIONALE_4'
            });var format_FORETSNIOB_5 = new ol.format.GeoJSON();
var features_FORETSNIOB_5 = format_FORETSNIOB_5.readFeatures(json_FORETSNIOB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FORETSNIOB_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_FORETSNIOB_5.addFeatures(features_FORETSNIOB_5);var lyr_FORETSNIOB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FORETSNIOB_5, 
                style: style_FORETSNIOB_5,
                title: '<img src="styles/legend/FORETSNIOB_5.png" /> FORETS NIOB'
            });var format_EAU_TEMPORAIRE_6 = new ol.format.GeoJSON();
var features_EAU_TEMPORAIRE_6 = format_EAU_TEMPORAIRE_6.readFeatures(json_EAU_TEMPORAIRE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAU_TEMPORAIRE_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EAU_TEMPORAIRE_6.addFeatures(features_EAU_TEMPORAIRE_6);var lyr_EAU_TEMPORAIRE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EAU_TEMPORAIRE_6, 
                style: style_EAU_TEMPORAIRE_6,
                title: '<img src="styles/legend/EAU_TEMPORAIRE_6.png" /> EAU_TEMPORAIRE'
            });var format_MARES_7 = new ol.format.GeoJSON();
var features_MARES_7 = format_MARES_7.readFeatures(json_MARES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARES_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MARES_7.addFeatures(features_MARES_7);var lyr_MARES_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARES_7, 
                style: style_MARES_7,
                title: '<img src="styles/legend/MARES_7.png" /> MARES'
            });var format_Ndiob_Villages_8 = new ol.format.GeoJSON();
var features_Ndiob_Villages_8 = format_Ndiob_Villages_8.readFeatures(json_Ndiob_Villages_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ndiob_Villages_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ndiob_Villages_8.addFeatures(features_Ndiob_Villages_8);var lyr_Ndiob_Villages_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ndiob_Villages_8, 
                style: style_Ndiob_Villages_8,
                title: '<img src="styles/legend/Ndiob_Villages_8.png" /> Ndiob_Villages'
            });

lyr_PEDOLOGIE_0.setVisible(true);lyr_COMMUNE_NDIOB_1.setVisible(true);lyr_RESEAU_ROUTIER_2.setVisible(true);lyr_FORETS_3.setVisible(true);lyr_NATIONALE_4_4.setVisible(true);lyr_FORETSNIOB_5.setVisible(true);lyr_EAU_TEMPORAIRE_6.setVisible(true);lyr_MARES_7.setVisible(true);lyr_Ndiob_Villages_8.setVisible(true);
var layersList = [lyr_PEDOLOGIE_0,lyr_COMMUNE_NDIOB_1,lyr_RESEAU_ROUTIER_2,lyr_FORETS_3,lyr_NATIONALE_4_4,lyr_FORETSNIOB_5,lyr_EAU_TEMPORAIRE_6,lyr_MARES_7,lyr_Ndiob_Villages_8];
lyr_PEDOLOGIE_0.set('fieldAliases', {'MAPU': 'MAPU', 'COUNT': 'COUNT', 'NAME': 'NAME', });
lyr_COMMUNE_NDIOB_1.set('fieldAliases', {'NOMCR': 'NOMCR', 'Admi1': 'Admi1', 'Admi2': 'Admi2', 'Admi3': 'Admi3', 'Admi4': 'Admi4', 'NOMREG': 'NOMREG', 'NOMDEP': 'NOMDEP', 'surf': 'surf', 'surf_ha': 'surf_ha', 'NOMARRO_1': 'NOMARRO_1', 'Toponymie2': 'Toponymie2', });
lyr_RESEAU_ROUTIER_2.set('fieldAliases', {'IDENTIFI': 'IDENTIFI', 'TYPE': 'TYPE', 'SOUSTYP': 'SOUSTYP', 'X': 'X', 'Y': 'Y', 'X1': 'X1', 'Y1': 'Y1', 'LONGUEUR': 'LONGUEUR', 'SURFACE': 'SURFACE', 'ANGLE': 'ANGLE', 'DISTANCE': 'DISTANCE', 'NOM': 'NOM', 'LONGUEU1': 'LONGUEU1', 'VITESSE': 'VITESSE', 'BITUME': 'BITUME', });
lyr_FORETS_3.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', });
lyr_NATIONALE_4_4.set('fieldAliases', {'IDENTIFI': 'IDENTIFI', 'TYPE': 'TYPE', 'SOUSTYP': 'SOUSTYP', 'X': 'X', 'Y': 'Y', 'X1': 'X1', 'Y1': 'Y1', 'LONGUEUR': 'LONGUEUR', 'SURFACE': 'SURFACE', 'ANGLE': 'ANGLE', 'DISTANCE': 'DISTANCE', 'NOM': 'NOM', 'LONGUEU1': 'LONGUEU1', 'VITESSE': 'VITESSE', 'BITUME': 'BITUME', });
lyr_FORETSNIOB_5.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', });
lyr_EAU_TEMPORAIRE_6.set('fieldAliases', {'LENGTH': 'LENGTH', 'CODE': 'CODE', 'LIBELLE': 'LIBELLE', 'NOM': 'NOM', });
lyr_MARES_7.set('fieldAliases', {'id': 'id', 'NOM': 'NOM', });
lyr_Ndiob_Villages_8.set('fieldAliases', {'ADMIN': 'ADMIN', 'TOPONYMIE': 'TOPONYMIE', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', });
lyr_PEDOLOGIE_0.set('fieldImages', {'MAPU': 'TextEdit', 'COUNT': 'TextEdit', 'NAME': 'TextEdit', });
lyr_COMMUNE_NDIOB_1.set('fieldImages', {'NOMCR': 'TextEdit', 'Admi1': 'TextEdit', 'Admi2': 'TextEdit', 'Admi3': 'TextEdit', 'Admi4': 'TextEdit', 'NOMREG': 'TextEdit', 'NOMDEP': 'TextEdit', 'surf': 'TextEdit', 'surf_ha': 'TextEdit', 'NOMARRO_1': 'TextEdit', 'Toponymie2': 'TextEdit', });
lyr_RESEAU_ROUTIER_2.set('fieldImages', {'IDENTIFI': 'TextEdit', 'TYPE': 'TextEdit', 'SOUSTYP': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'LONGUEUR': 'TextEdit', 'SURFACE': 'TextEdit', 'ANGLE': 'TextEdit', 'DISTANCE': 'TextEdit', 'NOM': 'TextEdit', 'LONGUEU1': 'TextEdit', 'VITESSE': 'TextEdit', 'BITUME': 'TextEdit', });
lyr_FORETS_3.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', });
lyr_NATIONALE_4_4.set('fieldImages', {'IDENTIFI': 'TextEdit', 'TYPE': 'TextEdit', 'SOUSTYP': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'LONGUEUR': 'TextEdit', 'SURFACE': 'TextEdit', 'ANGLE': 'TextEdit', 'DISTANCE': 'TextEdit', 'NOM': 'TextEdit', 'LONGUEU1': 'TextEdit', 'VITESSE': 'TextEdit', 'BITUME': 'TextEdit', });
lyr_FORETSNIOB_5.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', });
lyr_EAU_TEMPORAIRE_6.set('fieldImages', {'LENGTH': 'TextEdit', 'CODE': 'TextEdit', 'LIBELLE': 'TextEdit', 'NOM': 'TextEdit', });
lyr_MARES_7.set('fieldImages', {'id': 'TextEdit', 'NOM': 'TextEdit', });
lyr_Ndiob_Villages_8.set('fieldImages', {'ADMIN': '', 'TOPONYMIE': '', 'X_COORD': '', 'Y_COORD': '', });
lyr_PEDOLOGIE_0.set('fieldLabels', {'MAPU': 'no label', 'COUNT': 'no label', 'NAME': 'no label', });
lyr_COMMUNE_NDIOB_1.set('fieldLabels', {'NOMCR': 'no label', 'Admi1': 'no label', 'Admi2': 'no label', 'Admi3': 'no label', 'Admi4': 'no label', 'NOMREG': 'no label', 'NOMDEP': 'no label', 'surf': 'no label', 'surf_ha': 'no label', 'NOMARRO_1': 'no label', 'Toponymie2': 'no label', });
lyr_RESEAU_ROUTIER_2.set('fieldLabels', {'IDENTIFI': 'no label', 'TYPE': 'no label', 'SOUSTYP': 'no label', 'X': 'no label', 'Y': 'no label', 'X1': 'no label', 'Y1': 'no label', 'LONGUEUR': 'no label', 'SURFACE': 'no label', 'ANGLE': 'no label', 'DISTANCE': 'no label', 'NOM': 'no label', 'LONGUEU1': 'no label', 'VITESSE': 'no label', 'BITUME': 'no label', });
lyr_FORETS_3.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', });
lyr_NATIONALE_4_4.set('fieldLabels', {'IDENTIFI': 'no label', 'TYPE': 'no label', 'SOUSTYP': 'no label', 'X': 'no label', 'Y': 'no label', 'X1': 'no label', 'Y1': 'no label', 'LONGUEUR': 'no label', 'SURFACE': 'no label', 'ANGLE': 'no label', 'DISTANCE': 'no label', 'NOM': 'no label', 'LONGUEU1': 'no label', 'VITESSE': 'no label', 'BITUME': 'no label', });
lyr_FORETSNIOB_5.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', });
lyr_EAU_TEMPORAIRE_6.set('fieldLabels', {'LENGTH': 'no label', 'CODE': 'no label', 'LIBELLE': 'no label', 'NOM': 'no label', });
lyr_MARES_7.set('fieldLabels', {'id': 'no label', 'NOM': 'no label', });
lyr_Ndiob_Villages_8.set('fieldLabels', {'ADMIN': 'no label', 'TOPONYMIE': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', });
lyr_Ndiob_Villages_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});