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
    instance = new Themeparks.EntitiesApi();
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

  describe('EntitiesApi', function() {
    describe('getEntity', function() {
      it('should call getEntity successfully', function(done) {
        //uncomment below and update the code to test getEntity
        //instance.getEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntityChildren', function() {
      it('should call getEntityChildren successfully', function(done) {
        //uncomment below and update the code to test getEntityChildren
        //instance.getEntityChildren(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntityLiveData', function() {
      it('should call getEntityLiveData successfully', function(done) {
        //uncomment below and update the code to test getEntityLiveData
        //instance.getEntityLiveData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntityScheduleUpcoming', function() {
      it('should call getEntityScheduleUpcoming successfully', function(done) {
        //uncomment below and update the code to test getEntityScheduleUpcoming
        //instance.getEntityScheduleUpcoming(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntityScheduleYearMonth', function() {
      it('should call getEntityScheduleYearMonth successfully', function(done) {
        //uncomment below and update the code to test getEntityScheduleYearMonth
        //instance.getEntityScheduleYearMonth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
