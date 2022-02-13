/**
 * Theme Parks Wiki V1 API
 * api.themeparks.wiki
 *
 * The version of the OpenAPI document: 1.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Themeparks);
  }
}(this, function(expect, Themeparks) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Themeparks.DestinationEntry();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DestinationEntry', function() {
    it('should create an instance of DestinationEntry', function() {
      // uncomment below and update the code to test DestinationEntry
      //var instance = new Themeparks.DestinationEntry();
      //expect(instance).to.be.a(Themeparks.DestinationEntry);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Themeparks.DestinationEntry();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Themeparks.DestinationEntry();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new Themeparks.DestinationEntry();
      //expect(instance).to.be();
    });

    it('should have the property parks (base name: "parks")', function() {
      // uncomment below and update the code to test the property parks
      //var instance = new Themeparks.DestinationEntry();
      //expect(instance).to.be();
    });

  });

}));
