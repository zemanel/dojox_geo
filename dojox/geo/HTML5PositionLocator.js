dojo.provide("dojox.geo.HTML5PositionLocator");

dojo.require("dojox.geo.Coordinate");

// geo position locator that supports HTML5
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
  }

});