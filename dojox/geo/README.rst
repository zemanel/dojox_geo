About
-----

"dojox.geo" is intented to be a Dojo Toolkit wrapper package for geolocation, in web browser environments.

Location Providers
------------------

A Location Provider is a wrapper for browser native or web services that provide client location information.
Some available providers are:

* HTML5:

  - HTML5 native geolocation requires acceptance by the client's user, to provide geolocation data
  - HTML5 native geolocation W3C spec is available at http://dev.w3.org/geo/api/spec-source.html
  - Feature support is dependent on browser vendors implementation

* Google Ajax API:

  - Google Ajax Api requires an API key
  - Documentation is available at http://code.google.com/intl/pt-PT/apis/ajax/documentation/#ClientLocation
  - Google Ajax Api uses [as far as i know, at least] information from Google Streeview data to triangulate
    the client location (matching an IP address to a location)

* Maxmind.com GeoIP JavaScript API:
  
    ~ In order to use this Javascript on your website, a link back to the www.maxmind.com website should be provided,
    or a Javascript attribution-free license can be purchased for $250/year.
    ~ Documentation is available at http://www.maxmind.com/app/javascript_city

Thoughts on the wrapper implementation
--------------------------------------

* Of the several geolocation providers, some have requirements for initialization (API key) and use (comercial license
  or linking to the providers website).
  The implementation must allow the developer to choose and initialize the providers he requires.
  Providers arent't accessed directly, but through a main wrapper that acts upon the, initially given, list of providers
  by falling back to the next one if an operation fails.

* Providers return mixed information and HTML5 support is dependent on browser vendor implementation level.
  For example, Google and Maxmind provide location names (city, region) which HTML5 does not.
  Aparently only Maxmind provides region code.
  The implementation must normalize data.

* HTML5 geolocation API supports several interesting features, that can be used to normalize access to geolocation data,
  across the several providers:

  - Allow the developer to request the current position, by passing a callback that gets handled when the information
    is available

  - Allow the developer to request a recurring "watch" on the current position, by passing a callback that gets
    handled everytime the provider detects that the current position has changed.
    Every request to create a "watch" returns an unique ID for the watch that allows the developer to perform 
    operations on the watch, as clearing.

  - Caching. By means of options, like for example "maximumAge", the implementation should cache the last know locations
