dojo.provide("dojox.geo.GooglePositionLocator");

dojo.require("dojox.geo.Coordinate");

// geo position locator which uses google api
// see http://code.google.com/intl/pt-PT/apis/ajax/documentation/#ClientLocation
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