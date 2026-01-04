var wms_layers = [];


        var lyr_EsriWorldTopo_0 = new ol.layer.Tile({
            'title': 'Esri World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}
'
            })
        });
var format_Aug2024MillcreektoFredBurrtracks_1 = new ol.format.GeoJSON();
var features_Aug2024MillcreektoFredBurrtracks_1 = format_Aug2024MillcreektoFredBurrtracks_1.readFeatures(json_Aug2024MillcreektoFredBurrtracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aug2024MillcreektoFredBurrtracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aug2024MillcreektoFredBurrtracks_1.addFeatures(features_Aug2024MillcreektoFredBurrtracks_1);
var lyr_Aug2024MillcreektoFredBurrtracks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aug2024MillcreektoFredBurrtracks_1, 
                style: style_Aug2024MillcreektoFredBurrtracks_1,
                popuplayertitle: 'Aug 2024 Mill creek to Fred Burr — tracks',
                interactive: true,
                title: '<img src="styles/legend/Aug2024MillcreektoFredBurrtracks_1.png" /> Aug 2024 Mill creek to Fred Burr — tracks'
            });
var format_Aug2024MillcreektoFredBurrtrack_points_2 = new ol.format.GeoJSON();
var features_Aug2024MillcreektoFredBurrtrack_points_2 = format_Aug2024MillcreektoFredBurrtrack_points_2.readFeatures(json_Aug2024MillcreektoFredBurrtrack_points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aug2024MillcreektoFredBurrtrack_points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aug2024MillcreektoFredBurrtrack_points_2.addFeatures(features_Aug2024MillcreektoFredBurrtrack_points_2);
var lyr_Aug2024MillcreektoFredBurrtrack_points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aug2024MillcreektoFredBurrtrack_points_2, 
                style: style_Aug2024MillcreektoFredBurrtrack_points_2,
                popuplayertitle: 'Aug 2024 Mill creek to Fred Burr — track_points',
                interactive: true,
                title: '<img src="styles/legend/Aug2024MillcreektoFredBurrtrack_points_2.png" /> Aug 2024 Mill creek to Fred Burr — track_points'
            });
var format_S_USATrans_Trail_NFS_Publish_3 = new ol.format.GeoJSON();
var features_S_USATrans_Trail_NFS_Publish_3 = format_S_USATrans_Trail_NFS_Publish_3.readFeatures(json_S_USATrans_Trail_NFS_Publish_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_USATrans_Trail_NFS_Publish_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_USATrans_Trail_NFS_Publish_3.addFeatures(features_S_USATrans_Trail_NFS_Publish_3);
var lyr_S_USATrans_Trail_NFS_Publish_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_USATrans_Trail_NFS_Publish_3, 
                style: style_S_USATrans_Trail_NFS_Publish_3,
                popuplayertitle: 'S_USA.Trans_Trail_NFS_Publish',
                interactive: true,
                title: '<img src="styles/legend/S_USATrans_Trail_NFS_Publish_3.png" /> S_USA.Trans_Trail_NFS_Publish'
            });
var format_millcreekfredburrnotes_4 = new ol.format.GeoJSON();
var features_millcreekfredburrnotes_4 = format_millcreekfredburrnotes_4.readFeatures(json_millcreekfredburrnotes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_millcreekfredburrnotes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_millcreekfredburrnotes_4.addFeatures(features_millcreekfredburrnotes_4);
var lyr_millcreekfredburrnotes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_millcreekfredburrnotes_4, 
                style: style_millcreekfredburrnotes_4,
                popuplayertitle: 'mill creek fred burr notes',
                interactive: true,
    title: 'mill creek fred burr notes<br />\
    <img src="styles/legend/millcreekfredburrnotes_4_0.png" /> th_end<br />\
    <img src="styles/legend/millcreekfredburrnotes_4_1.png" /> th_start<br />\
    <img src="styles/legend/millcreekfredburrnotes_4_2.png" /> <br />' });
var format_OfficialPhotosGeopackageLayerMillCreek_5 = new ol.format.GeoJSON();
var features_OfficialPhotosGeopackageLayerMillCreek_5 = format_OfficialPhotosGeopackageLayerMillCreek_5.readFeatures(json_OfficialPhotosGeopackageLayerMillCreek_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OfficialPhotosGeopackageLayerMillCreek_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OfficialPhotosGeopackageLayerMillCreek_5.addFeatures(features_OfficialPhotosGeopackageLayerMillCreek_5);
var lyr_OfficialPhotosGeopackageLayerMillCreek_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OfficialPhotosGeopackageLayerMillCreek_5, 
                style: style_OfficialPhotosGeopackageLayerMillCreek_5,
                popuplayertitle: 'Official Photos Geopackage Layer Mill Creek',
                interactive: true,
                title: '<img src="styles/legend/OfficialPhotosGeopackageLayerMillCreek_5.png" /> Official Photos Geopackage Layer Mill Creek'
            });

lyr_EsriWorldTopo_0.setVisible(true);lyr_Aug2024MillcreektoFredBurrtracks_1.setVisible(true);lyr_Aug2024MillcreektoFredBurrtrack_points_2.setVisible(true);lyr_S_USATrans_Trail_NFS_Publish_3.setVisible(true);lyr_millcreekfredburrnotes_4.setVisible(true);lyr_OfficialPhotosGeopackageLayerMillCreek_5.setVisible(true);
var layersList = [lyr_EsriWorldTopo_0,lyr_Aug2024MillcreektoFredBurrtracks_1,lyr_Aug2024MillcreektoFredBurrtrack_points_2,lyr_S_USATrans_Trail_NFS_Publish_3,lyr_millcreekfredburrnotes_4,lyr_OfficialPhotosGeopackageLayerMillCreek_5];
lyr_Aug2024MillcreektoFredBurrtracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Aug2024MillcreektoFredBurrtrack_points_2.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_S_USATrans_Trail_NFS_Publish_3.set('fieldAliases', {'TRAIL_NAME': 'TRAIL_NAME', 'TRAIL_TYPE': 'TRAIL_TYPE', 'TRAIL_CN': 'TRAIL_CN', 'BMP': 'BMP', 'EMP': 'EMP', 'SEGMENT_LE': 'SEGMENT_LE', 'ADMIN_ORG': 'ADMIN_ORG', 'MANAGING_O': 'MANAGING_O', 'SECURITY_I': 'SECURITY_I', 'ATTRIBUTES': 'ATTRIBUTES', 'NATIONAL_T': 'NATIONAL_T', 'TRAIL_CLAS': 'TRAIL_CLAS', 'ACCESSIBIL': 'ACCESSIBIL', 'TRAIL_SURF': 'TRAIL_SURF', 'SURFACE_FI': 'SURFACE_FI', 'TYPICAL_TR': 'TYPICAL_TR', 'TYPICAL__1': 'TYPICAL__1', 'MINIMUM_TR': 'MINIMUM_TR', 'TYPICAL__2': 'TYPICAL__2', 'SPECIAL_MG': 'SPECIAL_MG', 'TERRA_BASE': 'TERRA_BASE', 'MVUM_SYMBO': 'MVUM_SYMBO', 'TERRA_MOTO': 'TERRA_MOTO', 'SNOW_MOTOR': 'SNOW_MOTOR', 'WATER_MOTO': 'WATER_MOTO', 'ALLOWED_TE': 'ALLOWED_TE', 'ALLOWED_SN': 'ALLOWED_SN', 'HIKER_PEDE': 'HIKER_PEDE', 'HIKER_PE_1': 'HIKER_PE_1', 'HIKER_PE_2': 'HIKER_PE_2', 'HIKER_PE_3': 'HIKER_PE_3', 'HIKER_PE_4': 'HIKER_PE_4', 'PACK_SADDL': 'PACK_SADDL', 'PACK_SAD_1': 'PACK_SAD_1', 'PACK_SAD_2': 'PACK_SAD_2', 'PACK_SAD_3': 'PACK_SAD_3', 'PACK_SAD_4': 'PACK_SAD_4', 'BICYCLE_MA': 'BICYCLE_MA', 'BICYCLE_AC': 'BICYCLE_AC', 'BICYCLE_DI': 'BICYCLE_DI', 'BICYCLE__1': 'BICYCLE__1', 'BICYCLE_RE': 'BICYCLE_RE', 'MOTORCYCLE': 'MOTORCYCLE', 'MOTORCYC_1': 'MOTORCYC_1', 'MOTORCYC_2': 'MOTORCYC_2', 'MOTORCYC_3': 'MOTORCYC_3', 'MOTORCYC_4': 'MOTORCYC_4', 'ATV_MANAGE': 'ATV_MANAGE', 'ATV_ACCPT': 'ATV_ACCPT', 'ATV_DISC': 'ATV_DISC', 'ATV_ACCPT_': 'ATV_ACCPT_', 'ATV_RESTRI': 'ATV_RESTRI', 'FOURWD_MAN': 'FOURWD_MAN', 'FOURWD_ACC': 'FOURWD_ACC', 'FOURWD_DIS': 'FOURWD_DIS', 'FOURWD_A_1': 'FOURWD_A_1', 'FOURWD_RES': 'FOURWD_RES', 'TRAIL_NO': 'TRAIL_NO', 'SNOWCOACH_': 'SNOWCOACH_', 'SNOWCOACH1': 'SNOWCOACH1', 'SNOWCOAC_1': 'SNOWCOAC_1', 'SNOWCOAC_2': 'SNOWCOAC_2', 'SNOWCOAC_3': 'SNOWCOAC_3', 'SNOWMOBILE': 'SNOWMOBILE', 'SNOWMOBI_1': 'SNOWMOBI_1', 'SNOWMOBI_2': 'SNOWMOBI_2', 'SNOWMOBI_3': 'SNOWMOBI_3', 'SNOWMOBI_4': 'SNOWMOBI_4', 'SNOWSHOE_M': 'SNOWSHOE_M', 'SNOWSHOE_A': 'SNOWSHOE_A', 'SNOWSHOE_D': 'SNOWSHOE_D', 'SNOWSHOE_1': 'SNOWSHOE_1', 'SNOWSHOE_R': 'SNOWSHOE_R', 'XCOUNTRY_S': 'XCOUNTRY_S', 'XCOUNTRY_1': 'XCOUNTRY_1', 'XCOUNTRY_2': 'XCOUNTRY_2', 'XCOUNTRY_3': 'XCOUNTRY_3', 'XCOUNTRY_4': 'XCOUNTRY_4', 'MOTOR_WATE': 'MOTOR_WATE', 'MOTOR_WA_1': 'MOTOR_WA_1', 'MOTOR_WA_2': 'MOTOR_WA_2', 'MOTOR_WA_3': 'MOTOR_WA_3', 'MOTOR_WA_4': 'MOTOR_WA_4', 'NONMOTOR_W': 'NONMOTOR_W', 'NONMOTOR_1': 'NONMOTOR_1', 'NONMOTOR_2': 'NONMOTOR_2', 'NONMOTOR_3': 'NONMOTOR_3', 'NONMOTOR_4': 'NONMOTOR_4', 'GIS_MILES': 'GIS_MILES', 'E_BIKE_CLA': 'E_BIKE_CLA', 'E_BIKE_C_1': 'E_BIKE_C_1', 'E_BIKE_C_2': 'E_BIKE_C_2', 'E_BIKE_C_3': 'E_BIKE_C_3', 'E_BIKE_C_4': 'E_BIKE_C_4', 'E_BIKE_C_5': 'E_BIKE_C_5', 'E_BIKE_C_6': 'E_BIKE_C_6', 'E_BIKE_C_7': 'E_BIKE_C_7', 'E_BIKE_C_8': 'E_BIKE_C_8', 'E_BIKE_C_9': 'E_BIKE_C_9', 'E_BIKE__10': 'E_BIKE__10', 'E_BIKE__11': 'E_BIKE__11', 'GLOBALID': 'GLOBALID', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_millcreekfredburrnotes_4.set('fieldAliases', {'fid': 'fid', 'kind': 'kind', 'note': 'note', });
lyr_OfficialPhotosGeopackageLayerMillCreek_5.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'photo_url': 'photo_url', });
lyr_Aug2024MillcreektoFredBurrtracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Aug2024MillcreektoFredBurrtrack_points_2.set('fieldImages', {'track_fid': 'Range', 'track_seg_id': 'Range', 'track_seg_point_id': 'Range', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_S_USATrans_Trail_NFS_Publish_3.set('fieldImages', {'TRAIL_NAME': '', 'TRAIL_TYPE': '', 'TRAIL_CN': '', 'BMP': '', 'EMP': '', 'SEGMENT_LE': '', 'ADMIN_ORG': '', 'MANAGING_O': '', 'SECURITY_I': '', 'ATTRIBUTES': '', 'NATIONAL_T': '', 'TRAIL_CLAS': '', 'ACCESSIBIL': '', 'TRAIL_SURF': '', 'SURFACE_FI': '', 'TYPICAL_TR': '', 'TYPICAL__1': '', 'MINIMUM_TR': '', 'TYPICAL__2': '', 'SPECIAL_MG': '', 'TERRA_BASE': '', 'MVUM_SYMBO': '', 'TERRA_MOTO': '', 'SNOW_MOTOR': '', 'WATER_MOTO': '', 'ALLOWED_TE': '', 'ALLOWED_SN': '', 'HIKER_PEDE': '', 'HIKER_PE_1': '', 'HIKER_PE_2': '', 'HIKER_PE_3': '', 'HIKER_PE_4': '', 'PACK_SADDL': '', 'PACK_SAD_1': '', 'PACK_SAD_2': '', 'PACK_SAD_3': '', 'PACK_SAD_4': '', 'BICYCLE_MA': '', 'BICYCLE_AC': '', 'BICYCLE_DI': '', 'BICYCLE__1': '', 'BICYCLE_RE': '', 'MOTORCYCLE': '', 'MOTORCYC_1': '', 'MOTORCYC_2': '', 'MOTORCYC_3': '', 'MOTORCYC_4': '', 'ATV_MANAGE': '', 'ATV_ACCPT': '', 'ATV_DISC': '', 'ATV_ACCPT_': '', 'ATV_RESTRI': '', 'FOURWD_MAN': '', 'FOURWD_ACC': '', 'FOURWD_DIS': '', 'FOURWD_A_1': '', 'FOURWD_RES': '', 'TRAIL_NO': '', 'SNOWCOACH_': '', 'SNOWCOACH1': '', 'SNOWCOAC_1': '', 'SNOWCOAC_2': '', 'SNOWCOAC_3': '', 'SNOWMOBILE': '', 'SNOWMOBI_1': '', 'SNOWMOBI_2': '', 'SNOWMOBI_3': '', 'SNOWMOBI_4': '', 'SNOWSHOE_M': '', 'SNOWSHOE_A': '', 'SNOWSHOE_D': '', 'SNOWSHOE_1': '', 'SNOWSHOE_R': '', 'XCOUNTRY_S': '', 'XCOUNTRY_1': '', 'XCOUNTRY_2': '', 'XCOUNTRY_3': '', 'XCOUNTRY_4': '', 'MOTOR_WATE': '', 'MOTOR_WA_1': '', 'MOTOR_WA_2': '', 'MOTOR_WA_3': '', 'MOTOR_WA_4': '', 'NONMOTOR_W': '', 'NONMOTOR_1': '', 'NONMOTOR_2': '', 'NONMOTOR_3': '', 'NONMOTOR_4': '', 'GIS_MILES': '', 'E_BIKE_CLA': '', 'E_BIKE_C_1': '', 'E_BIKE_C_2': '', 'E_BIKE_C_3': '', 'E_BIKE_C_4': '', 'E_BIKE_C_5': '', 'E_BIKE_C_6': '', 'E_BIKE_C_7': '', 'E_BIKE_C_8': '', 'E_BIKE_C_9': '', 'E_BIKE__10': '', 'E_BIKE__11': '', 'GLOBALID': '', 'SHAPE_LEN': '', });
lyr_millcreekfredburrnotes_4.set('fieldImages', {'fid': 'TextEdit', 'kind': 'TextEdit', 'note': 'TextEdit', });
lyr_OfficialPhotosGeopackageLayerMillCreek_5.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', 'photo_url': '', });
lyr_Aug2024MillcreektoFredBurrtracks_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Aug2024MillcreektoFredBurrtrack_points_2.set('fieldLabels', {'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'header label - visible with data', 'time': 'inline label - visible with data', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_S_USATrans_Trail_NFS_Publish_3.set('fieldLabels', {'TRAIL_NAME': 'no label', 'TRAIL_TYPE': 'no label', 'TRAIL_CN': 'no label', 'BMP': 'no label', 'EMP': 'no label', 'SEGMENT_LE': 'no label', 'ADMIN_ORG': 'no label', 'MANAGING_O': 'no label', 'SECURITY_I': 'no label', 'ATTRIBUTES': 'no label', 'NATIONAL_T': 'no label', 'TRAIL_CLAS': 'no label', 'ACCESSIBIL': 'no label', 'TRAIL_SURF': 'no label', 'SURFACE_FI': 'no label', 'TYPICAL_TR': 'no label', 'TYPICAL__1': 'no label', 'MINIMUM_TR': 'no label', 'TYPICAL__2': 'no label', 'SPECIAL_MG': 'no label', 'TERRA_BASE': 'no label', 'MVUM_SYMBO': 'no label', 'TERRA_MOTO': 'no label', 'SNOW_MOTOR': 'no label', 'WATER_MOTO': 'no label', 'ALLOWED_TE': 'no label', 'ALLOWED_SN': 'no label', 'HIKER_PEDE': 'no label', 'HIKER_PE_1': 'no label', 'HIKER_PE_2': 'no label', 'HIKER_PE_3': 'no label', 'HIKER_PE_4': 'no label', 'PACK_SADDL': 'no label', 'PACK_SAD_1': 'no label', 'PACK_SAD_2': 'no label', 'PACK_SAD_3': 'no label', 'PACK_SAD_4': 'no label', 'BICYCLE_MA': 'no label', 'BICYCLE_AC': 'no label', 'BICYCLE_DI': 'no label', 'BICYCLE__1': 'no label', 'BICYCLE_RE': 'no label', 'MOTORCYCLE': 'no label', 'MOTORCYC_1': 'no label', 'MOTORCYC_2': 'no label', 'MOTORCYC_3': 'no label', 'MOTORCYC_4': 'no label', 'ATV_MANAGE': 'no label', 'ATV_ACCPT': 'no label', 'ATV_DISC': 'no label', 'ATV_ACCPT_': 'no label', 'ATV_RESTRI': 'no label', 'FOURWD_MAN': 'no label', 'FOURWD_ACC': 'no label', 'FOURWD_DIS': 'no label', 'FOURWD_A_1': 'no label', 'FOURWD_RES': 'no label', 'TRAIL_NO': 'no label', 'SNOWCOACH_': 'no label', 'SNOWCOACH1': 'no label', 'SNOWCOAC_1': 'no label', 'SNOWCOAC_2': 'no label', 'SNOWCOAC_3': 'no label', 'SNOWMOBILE': 'no label', 'SNOWMOBI_1': 'no label', 'SNOWMOBI_2': 'no label', 'SNOWMOBI_3': 'no label', 'SNOWMOBI_4': 'no label', 'SNOWSHOE_M': 'no label', 'SNOWSHOE_A': 'no label', 'SNOWSHOE_D': 'no label', 'SNOWSHOE_1': 'no label', 'SNOWSHOE_R': 'no label', 'XCOUNTRY_S': 'no label', 'XCOUNTRY_1': 'no label', 'XCOUNTRY_2': 'no label', 'XCOUNTRY_3': 'no label', 'XCOUNTRY_4': 'no label', 'MOTOR_WATE': 'no label', 'MOTOR_WA_1': 'no label', 'MOTOR_WA_2': 'no label', 'MOTOR_WA_3': 'no label', 'MOTOR_WA_4': 'no label', 'NONMOTOR_W': 'no label', 'NONMOTOR_1': 'no label', 'NONMOTOR_2': 'no label', 'NONMOTOR_3': 'no label', 'NONMOTOR_4': 'no label', 'GIS_MILES': 'no label', 'E_BIKE_CLA': 'no label', 'E_BIKE_C_1': 'no label', 'E_BIKE_C_2': 'no label', 'E_BIKE_C_3': 'no label', 'E_BIKE_C_4': 'no label', 'E_BIKE_C_5': 'no label', 'E_BIKE_C_6': 'no label', 'E_BIKE_C_7': 'no label', 'E_BIKE_C_8': 'no label', 'E_BIKE_C_9': 'no label', 'E_BIKE__10': 'no label', 'E_BIKE__11': 'no label', 'GLOBALID': 'no label', 'SHAPE_LEN': 'no label', });
lyr_millcreekfredburrnotes_4.set('fieldLabels', {'fid': 'no label', 'kind': 'inline label - visible with data', 'note': 'inline label - visible with data', });
lyr_OfficialPhotosGeopackageLayerMillCreek_5.set('fieldLabels', {'fid': 'no label', 'photo': 'no label', 'filename': 'header label - visible with data', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', 'photo_url': 'inline label - visible with data', });
lyr_OfficialPhotosGeopackageLayerMillCreek_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});