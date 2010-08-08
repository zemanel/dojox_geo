dojo.provide("dojox.geo.Coordinate");

// Represents a lat/long coordinate
// TODO: extend Number?
dojo.declare("dojox.geo.Coordinate", null, {

  _coordinate: null,

  // Constructor
  constructor: function(coordinate) {
    this._coordinate = coordinate;
  },

  // Returns coordinate to radians
  toRad: function() {
    return this._coordinate * Math.PI / 180;
  },

  // Returns coordinate in degrees
  toDeg: function() {
    return this._coordinate * 180 / Math.PI;
  },

  // Returns an Coordinate object as a delta of another Coordinate object
  deltaOf: function(/*Object*/ anotherCoordinate) {
    // ugly hack
    return new dojox.geo.Coordinate(this - anotherCoordinate);
  },

  //
  toString: function() {
    return this._coordinate.toString();
  },

  //
  valueOf: function() {
    return this._coordinate;
  }

});