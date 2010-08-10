dojo.provide("dojox.geo.HTML5LocationProvider");

dojo.require("dojox.geo.Coordinate");

// geo position locator for HTML5 support
dojo.declare("dojox.geo.HTML5LocationProvider", null, {

  _features: {
    'position.coords.latitude': true,
    'position.coords.longitude': true,
    'position.coords.altitude': true,
    'position.coords.altitudeAccuracy': true,
    'position.coords.heading': true,
    'position.coords.speed': true
  },

  // Constructor
  constructor: function() {
  },

  // Features
  //TODO: maybe use 'features' list like dojox.data for the available position attributes?
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

  // Wrapps a call to HTML5 'navigator.geolocation.getCurrentPosition'
  getCurrentPosition: function(callback, errBack, options) {
    // var cb = dojo.hitch(this, '_getCurrentPositionCallback');
    // var eb = dojo.hitch(this, '_getCurrentPositionErrback');
    // navigator.geolocation.getCurrentPosition(cb, eb, options);
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new dojox.geo.Position(position.coords.latitude, position.coords.longitude);
      callback(pos);
      }, errBack, options);

  },

  // Wrapper for the real call, to pass Coordinate/Position data types to the user
  _getCurrentPositionCallback: function(position) {
    
  },

  // Wrapper for the real errback
  _getCurrentPositionErrback: function(err) {
    //TODO do something usefull
    console.error(err);
  },



  //
  watchPosition: function(callback, errBack, options) {
    return navigator.geolocation.watchPosition(callback, errBack, options);
  }

});