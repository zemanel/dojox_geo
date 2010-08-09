dojo.provide("dojox.geo.GooglePositionLocator");

dojo.require("dojox.geo.Coordinate");

// geo position locator which uses google api
// see http://code.google.com/intl/pt-PT/apis/ajax/documentation/#ClientLocation
// http://googlecode.blogspot.com/2008/08/two-new-ways-to-location-enable-your.html
dojo.declare("dojox.geo.GooglePositionLocator", null, {

  // Constructor
  constructor: function() {
  },

  //
  isCoordenateSupportAvailable: function() {
    return TRUE;
  },

  //
  isCountrySupportAvailable: function() {
    return TRUE;
  },

  //
  isCitySupportAvailable: function() {
    return TRUE;
  }

});