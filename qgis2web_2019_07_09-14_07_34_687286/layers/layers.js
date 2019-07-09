var wms_layers = [];
var format_COMMUNE_NDIOB_0 = new ol.format.GeoJSON();
var features_COMMUNE_NDIOB_0 = format_COMMUNE_NDIOB_0.readFeatures(json_COMMUNE_NDIOB_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_NDIOB_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_COMMUNE_NDIOB_0.addFeatures(features_COMMUNE_NDIOB_0);var lyr_COMMUNE_NDIOB_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_NDIOB_0, 
                style: style_COMMUNE_NDIOB_0,
                title: '<img src="styles/legend/COMMUNE_NDIOB_0.png" /> COMMUNE_NDIOB'
            });var format_RESEAU_ROUTIER_1 = new ol.format.GeoJSON();
var features_RESEAU_ROUTIER_1 = format_RESEAU_ROUTIER_1.readFeatures(json_RESEAU_ROUTIER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESEAU_ROUTIER_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RESEAU_ROUTIER_1.addFeatures(features_RESEAU_ROUTIER_1);var lyr_RESEAU_ROUTIER_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESEAU_ROUTIER_1, 
                style: style_RESEAU_ROUTIER_1,
                title: '<img src="styles/legend/RESEAU_ROUTIER_1.png" /> RESEAU_ROUTIER'
            });var format_Ndiob_Villages_2 = new ol.format.GeoJSON();
var features_Ndiob_Villages_2 = format_Ndiob_Villages_2.readFeatures(json_Ndiob_Villages_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ndiob_Villages_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ndiob_Villages_2.addFeatures(features_Ndiob_Villages_2);var lyr_Ndiob_Villages_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ndiob_Villages_2, 
                style: style_Ndiob_Villages_2,
                title: '<img src="styles/legend/Ndiob_Villages_2.png" /> Ndiob_Villages'
            });var format_NATIONALE_4_3 = new ol.format.GeoJSON();
var features_NATIONALE_4_3 = format_NATIONALE_4_3.readFeatures(json_NATIONALE_4_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NATIONALE_4_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NATIONALE_4_3.addFeatures(features_NATIONALE_4_3);var lyr_NATIONALE_4_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NATIONALE_4_3, 
                style: style_NATIONALE_4_3,
                title: '<img src="styles/legend/NATIONALE_4_3.png" /> NATIONALE_4'
            });var format_EAU_TEMPORAIRE_4 = new ol.format.GeoJSON();
var features_EAU_TEMPORAIRE_4 = format_EAU_TEMPORAIRE_4.readFeatures(json_EAU_TEMPORAIRE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EAU_TEMPORAIRE_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EAU_TEMPORAIRE_4.addFeatures(features_EAU_TEMPORAIRE_4);var lyr_EAU_TEMPORAIRE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EAU_TEMPORAIRE_4, 
                style: style_EAU_TEMPORAIRE_4,
                title: '<img src="styles/legend/EAU_TEMPORAIRE_4.png" /> EAU_TEMPORAIRE'
            });

lyr_COMMUNE_NDIOB_0.setVisible(true);lyr_RESEAU_ROUTIER_1.setVisible(true);lyr_Ndiob_Villages_2.setVisible(true);lyr_NATIONALE_4_3.setVisible(true);lyr_EAU_TEMPORAIRE_4.setVisible(true);
var layersList = [lyr_COMMUNE_NDIOB_0,lyr_RESEAU_ROUTIER_1,lyr_Ndiob_Villages_2,lyr_NATIONALE_4_3,lyr_EAU_TEMPORAIRE_4];
lyr_COMMUNE_NDIOB_0.set('fieldAliases', {'qc_id': 'qc_id', 'nomcr': 'nomcr', 'admi1': 'admi1', 'admi2': 'admi2', 'admi3': 'admi3', 'admi4': 'admi4', 'nomreg': 'nomreg', 'nomdep': 'nomdep', 'surf': 'surf', 'surf_ha': 'surf_ha', 'nomarro_1': 'nomarro_1', 'toponymie2': 'toponymie2', });
lyr_RESEAU_ROUTIER_1.set('fieldAliases', {'qc_id': 'qc_id', 'identifi': 'identifi', 'type': 'type', 'soustyp': 'soustyp', 'x': 'x', 'y': 'y', 'x1': 'x1', 'y1': 'y1', 'longueur': 'longueur', 'surface': 'surface', 'angle': 'angle', 'distance': 'distance', 'nom': 'nom', 'longueu1': 'longueu1', 'vitesse': 'vitesse', 'bitume': 'bitume', });
lyr_Ndiob_Villages_2.set('fieldAliases', {'qc_id': 'qc_id', 'admin': 'admin', 'toponymie': 'toponymie', 'x_coord': 'x_coord', 'y_coord': 'y_coord', });
lyr_NATIONALE_4_3.set('fieldAliases', {'qc_id': 'qc_id', 'identifi': 'identifi', 'type': 'type', 'soustyp': 'soustyp', 'x': 'x', 'y': 'y', 'x1': 'x1', 'y1': 'y1', 'longueur': 'longueur', 'surface': 'surface', 'angle': 'angle', 'distance': 'distance', 'nom': 'nom', 'longueu1': 'longueu1', 'vitesse': 'vitesse', 'bitume': 'bitume', });
lyr_EAU_TEMPORAIRE_4.set('fieldAliases', {'qc_id': 'qc_id', 'length': 'length', 'code': 'code', 'libelle': 'libelle', 'nom': 'nom', });
lyr_COMMUNE_NDIOB_0.set('fieldImages', {'qc_id': '', 'nomcr': '', 'admi1': '', 'admi2': '', 'admi3': '', 'admi4': '', 'nomreg': '', 'nomdep': '', 'surf': 'TextEdit', 'surf_ha': 'TextEdit', 'nomarro_1': '', 'toponymie2': '', });
lyr_RESEAU_ROUTIER_1.set('fieldImages', {'qc_id': '', 'identifi': '', 'type': '', 'soustyp': '', 'x': '', 'y': '', 'x1': '', 'y1': '', 'longueur': '', 'surface': '', 'angle': '', 'distance': '', 'nom': '', 'longueu1': '', 'vitesse': '', 'bitume': '', });
lyr_Ndiob_Villages_2.set('fieldImages', {'qc_id': '', 'admin': '', 'toponymie': '', 'x_coord': '', 'y_coord': '', });
lyr_NATIONALE_4_3.set('fieldImages', {'qc_id': '', 'identifi': '', 'type': '', 'soustyp': '', 'x': '', 'y': '', 'x1': '', 'y1': '', 'longueur': '', 'surface': '', 'angle': '', 'distance': '', 'nom': '', 'longueu1': '', 'vitesse': '', 'bitume': '', });
lyr_EAU_TEMPORAIRE_4.set('fieldImages', {'qc_id': '', 'length': '', 'code': '', 'libelle': '', 'nom': '', });
lyr_COMMUNE_NDIOB_0.set('fieldLabels', {'qc_id': 'no label', 'nomcr': 'no label', 'admi1': 'no label', 'admi2': 'no label', 'admi3': 'no label', 'admi4': 'no label', 'nomreg': 'no label', 'nomdep': 'no label', 'surf': 'no label', 'surf_ha': 'no label', 'nomarro_1': 'no label', 'toponymie2': 'no label', });
lyr_RESEAU_ROUTIER_1.set('fieldLabels', {'qc_id': 'no label', 'identifi': 'no label', 'type': 'no label', 'soustyp': 'no label', 'x': 'no label', 'y': 'no label', 'x1': 'no label', 'y1': 'no label', 'longueur': 'no label', 'surface': 'no label', 'angle': 'no label', 'distance': 'no label', 'nom': 'no label', 'longueu1': 'no label', 'vitesse': 'no label', 'bitume': 'no label', });
lyr_Ndiob_Villages_2.set('fieldLabels', {'qc_id': 'no label', 'admin': 'no label', 'toponymie': 'no label', 'x_coord': 'no label', 'y_coord': 'no label', });
lyr_NATIONALE_4_3.set('fieldLabels', {'qc_id': 'no label', 'identifi': 'no label', 'type': 'no label', 'soustyp': 'no label', 'x': 'no label', 'y': 'no label', 'x1': 'no label', 'y1': 'no label', 'longueur': 'no label', 'surface': 'no label', 'angle': 'no label', 'distance': 'no label', 'nom': 'no label', 'longueu1': 'no label', 'vitesse': 'no label', 'bitume': 'no label', });
lyr_EAU_TEMPORAIRE_4.set('fieldLabels', {'qc_id': 'no label', 'length': 'no label', 'code': 'no label', 'libelle': 'no label', 'nom': 'no label', });
lyr_EAU_TEMPORAIRE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});