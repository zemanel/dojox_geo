dojo.provide("dojox.geo.BaseLocationProvider");

dojo.require("dojox.geo.Coordinate");

// geo position locator for HTML5 support
dojo.declare("dojox.geo.BaseLocationProvider", null, {

  //  Available features:
  //    * From HTML5 spec and so
  //    position.coords.coordinates
  //    position.coords.altitude
  //    position.coords.altitudeAccuracy
  //    position.coords.heading
  //    position.coords.speed
  //
  //    * From Google client location
  //    position.address.city
  //    position.address.country
  //    position.address.country_code // ISO 3166-1 country code
  //    position.address.region
  
  _features: {}, // use "datastore" pattern to provide information to the consumer
  
  // Constructor
  constructor: function() {
  },
  
  // 
	getFeatures: function() {
		return this._features; //Object
	},

  // 
	hasFeature: function(feature) {
	  //TODO setup an _all_features array to validate feature param or throw an Error?
		return this._features[feature]; //Object
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