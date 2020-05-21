import { loadModules } from 'esri-loader'

// NOTE: module, not global scope
let _ArcGisApi

export const loadApi = () => {
  return loadModules([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/FeatureLayer',
    'esri/Graphic',
    'esri/layers/GraphicsLayer',
    'esri/geometry/geometryEngine',
    'esri/views/draw/Draw',
    'esri/geometry/Polyline',
    'esri/geometry/Polygon',
    'esri/geometry/Point',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/symbols/SimpleMarkerSymbol',
    'esri/layers/GeoJSONLayer',
    'esri/geometry/support/jsonUtils',
    'esri/renderers/HeatmapRenderer',
    'dojo/_base/declare',
    'dojo/_base/lang',
    'esri/widgets/ScaleBar',
    'esri/widgets/Search',
    'esri/geometry/Extent',
    'esri/webmap/Bookmark',
    'esri/layers/BaseDynamicLayer',
    'esri/layers/WMTSLayer',
    'esri/layers/MapImageLayer',
    'esri/tasks/QueryTask',
    'esri/tasks/support/Query',
    'esri/geometry/support/webMercatorUtils',
    'esri/layers/ImageryLayer',
    'esri/layers/WebTileLayer',
    'esri/layers/support/MapImage',
    'esri/renderers/ClassBreaksRenderer',
    'esri/symbols/TextSymbol',
    'esri/widgets/Sketch',
    'esri/Basemap',
    'esri/widgets/BasemapToggle/BasemapToggleViewModel',
    'esri/layers/support/TileInfo',
    'esri/geometry/SpatialReference',
    'esri/layers/GroupLayer',
    'esri/layers/BaseTileLayer',
    'esri/config',
    'esri/request',
    'esri/Color',
    'esri/tasks/Geoprocessor',
    'esri/widgets/Search/SearchSource',
    'esri/geometry/projection',
    'esri/geometry/support/geodesicUtils',
    'esri/PopupTemplate'
  ]).then(
    ([
      Map,
      MapView,
      FeatureLayer,
      Graphic,
      GraphicsLayer,
      geometryEngine,
      Draw,
      Polyline,
      Polygon,
      Point,
      SimpleFillSymbol,
      SimpleLineSymbol,
      SimpleMarkerSymbol,
      GeoJSONLayer,
      geometryJsonUtils,
      HeatmapRenderer,
      declare,
      lang,
      ScaleBar,
      Search,
      Extent,
      Bookmark,
      BaseDynamicLayer,
      WMTSLayer,
      MapImageLayer,
      QueryTask,
      Query,
      webMercatorUtils,
      ImageryLayer,
      WebTileLayer,
      MapImage,
      ClassBreaksRenderer,
      TextSymbol,
      Sketch,
      Basemap,
      BasemapToggleVM,
      TileInfo,
      SpatialReference,
      GroupLayer,
      BaseTileLayer,
      config,
      request,
      Color,
      Geoprocessor,
      SearchSource,
      projection,
      geodesicUtils,
      PopupTemplate
    ]) => {
      _ArcGisApi = {
        Map,
        MapView,
        FeatureLayer,
        Graphic,
        GraphicsLayer,
        geometryEngine,
        Draw,
        Polyline,
        Polygon,
        Point,
        SimpleFillSymbol,
        SimpleLineSymbol,
        SimpleMarkerSymbol,
        GeoJSONLayer,
        geometryJsonUtils,
        HeatmapRenderer,
        declare,
        lang,
        ScaleBar,
        Search,
        Extent,
        Bookmark,
        BaseDynamicLayer,
        WMTSLayer,
        MapImageLayer,
        QueryTask,
        Query,
        webMercatorUtils,
        ImageryLayer,
        WebTileLayer,
        MapImage,
        ClassBreaksRenderer,
        TextSymbol,
        Sketch,
        Basemap,
        BasemapToggleVM,
        TileInfo,
        SpatialReference,
        GroupLayer,
        BaseTileLayer,
        config,
        request,
        Color,
        Geoprocessor,
        SearchSource,
        projection,
        geodesicUtils,
        PopupTemplate
      }

      return _ArcGisApi
    }
  )
}

export const getArcGisApi = () => _ArcGisApi

export const getApi = modules => {
  return loadModules(modules).then(apis => apis)
}
