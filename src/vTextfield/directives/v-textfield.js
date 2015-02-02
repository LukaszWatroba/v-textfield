

// vTextfield directive
angular.module('vTextfield.directives')
  .directive('vTextfield', vTextfieldDirective);


function vTextfieldDirective () {
  return {
    restrict: 'AE',
    controller: vTextfieldController,
    scope: {}
  };
}


function vTextfieldController ($scope, $element, textfieldConfig) {
  var statesClasses = textfieldConfig.classes.states;

  this.setIsFocused = function(value) {
    $element
      .toggleClass(statesClasses.focused, value)
      .toggleClass(statesClasses.blured, !value);
  };

  this.setHasValue = function (value) {
    $element
      .toggleClass(statesClasses.hasValue, value)
      .toggleClass(statesClasses.hasNoValue, !value);
  };

  this.setIsRequired = function (value) {
    $element
      .toggleClass(statesClasses.required, value)
      .toggleClass(statesClasses.optional, !value);
  };

  this.setIsValid = function (value) {
    $element
      .toggleClass(statesClasses.valid, value)
      .toggleClass(statesClasses.invalid, !value);
  };

  this.setIsDirty = function (value) {
    $element
      .toggleClass(statesClasses.dirty, value)
      .toggleClass(statesClasses.pristine, !value);
  };

  this.setIsTouched = function (value) {
    $element
      .toggleClass(statesClasses.touched, value)
      .toggleClass(statesClasses.untouched, !value);
  };
}
vTextfieldController.$inject = ['$scope', '$element', 'textfieldConfig'];

