const defaultMapSettings = {
  apiBaseUrl: 'https://api.openrouteservice.org',
  saveToLocalStorage: true,
  elevationProfile: true,
  steepness: true,
  surface: true,
  waytype: true,
  apiKey: null,
  endpoints: null,
  locale: 'en-us',
  routingInstructionsLocale: 'en',
  unit: 'km',
  alwaysFitBounds: true,
  areaUnit: 'km',
  defaultTileProvider: 'osm',
  customTileProviderUrl: '',
  prioritizeSearchingForNearbyPlaces: true,
  defaultProfile: 'cycling-regular',
  compressDataUrlSegment: true,
  autoFitHighlightedBounds: true,
  acessibleModeActive: false,
  shownOnceTooltips: {},
  mapCenter: {lat: 55.681786, lng: 12.528783}, // Default center is at CBS

  // Settings not being used yet:
  tollways: false,
  randomizedIsochroneColors: false,
  suitabilityOfWays: false,
  distanceMarkers: false,
}

export default defaultMapSettings
