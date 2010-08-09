dojo.provide("dojox.geo.HTML5PositionLocator");

dojo.require("dojox.geo.Coordinate");

// geo position locator for HTML5 support
dojo.declare("dojox.geo.HTML5PositionLocator", null, {

  // Constructor
  constructor: function() {
  },

  //
  isCoordenateSupportAvailable: function() {
    return navigator!=="undefined" && navigator.geolocation!=="undefined";
  },

  //
  isCountrySupportAvailable: function() {
    return FALSE;
  },

  //
  isCitySupportAvailable: function() {
    return FALSE;
  },

  //
  getCurrentPosition: function(callback, errBack, options) {
    navigator.geolocation.getCurrentPosition(callback, errBack, options);
  },

  //
  watchPosition: function(callback, errBack, options) {
    return navigator.geolocation.watchPosition(callback, errBack, options);
  }

});