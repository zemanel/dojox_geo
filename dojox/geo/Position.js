dojo.provide("dojox.geo.Position");

dojo.require("dojox.geo.Coordinate");

// Represents a position in space
dojo.declare("dojox.geo.Position", null, {
  
  _latitude: null,
  _longitude: null,

  //
  constructor: function(/*Object*/ latitude, /*Object*/ longitude) {
    //TODO check params as instanceof dojox.geo.Coordinate
    this._latitude = latitude;
    this._longitude = longitude;
  },

  // Returns the latitude
  getLatitude: function() {
    return this._latitude;
  },

  // Returns the longitude
  getLongitude: function() {
    return this._longitude;
  },

  // Returns the distance in KM between this Position and another
  // As seen on Chris Veness, http://www.movable-type.co.uk/scripts/latlong.html
  distanceToInKM: function(/*Object*/ anotherPosition) {
    //TODO: finish me
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
  }

});