'use strict';

describe('vTextfield', function () {

  var dependencies = [];

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };



  beforeEach(function () {
    dependencies = angular.module('vTextfield').requires;
  });

  
  
  it('should load config module', function () {
    expect(hasModule('vTextfield.config')).toBe(true);
  });


  it('should load directives module', function () {
    expect(hasModule('vTextfield.directives')).toBe(true);
  });

});