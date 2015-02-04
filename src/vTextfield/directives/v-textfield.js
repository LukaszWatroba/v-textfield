

// vTextfield directive
angular.module('vTextfield.directives')
  .directive('vTextfield', vTextfieldDirective);


function vTextfieldDirective () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    controller: vTextfieldController,
    scope: {},
    link: function (scope, iElement, iAttrs, ctrl, transclude) {
      transclude(scope.$parent, function (clone) {
        iElement.append(clone);
      });
    }
  };
}


function vTextfieldController ($scope, $element, textfieldConfig) {
  var states = textfieldConfig.states;

  this.setIsFocused = function(value) {
    $element
      .toggleClass(states.focused, value)
      .toggleClass(states.blured, !value);
  };

  this.setHasValue = function (value) {
    $element
      .toggleClass(states.hasValue, value)
      .toggleClass(states.hasNoValue, !value);
  };

  this.setHasPlaceholder = function (value) {
    $element
      .toggleClass(states.hasPlaceholder, value)
      .toggleClass(states.hasNoPlaceholder, !value);
  };

  this.setIsRequired = function (value) {
    $element
      .toggleClass(states.required, value)
      .toggleClass(states.optional, !value);
  };

  this.setIsValid = function (value) {
    $element
      .toggleClass(states.valid, value)
      .toggleClass(states.invalid, !value);
  };

  this.setIsDirty = function (value) {
    $element
      .toggleClass(states.dirty, value)
      .toggleClass(states.pristine, !value);
  };

  this.setIsTouched = function (value) {
    $element
      .toggleClass(states.touched, value)
      .toggleClass(states.untouched, !value);
  };
}
vTextfieldController.$inject = ['$scope', '$element', 'textfieldConfig'];

