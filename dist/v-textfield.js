/**
 * User-friendly form validation in AngularJS
 * @version v0.0.1
 * @link http://lukaszwatroba.github.io/v-textfield
 * @author Łukasz Wątroba <l@lukaszwatroba.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function(angular) {
'use strict';




// Config
angular.module('vTextfield.config', [])
  .constant('textfieldConfig', {
    classes: {
      states: {
        focused: 'is-focused',
        blured: 'is-blured',
        valid: 'is-valid',
        invalid: 'is-invalid',
        dirty: 'is-dirty',
        pristine: 'is-pristine',
        required: 'is-required',
        optional: 'is-optional',
        hasValue: 'has-value',
        hasNoValue: 'has-noValue'
      }
    }
  });


// Modules
angular.module('vTextfield.directives', []);
angular.module('vTextfield',
  [
    'vTextfield.config',
    'vTextfield.directives'
  ]);



// vTextfieldInput directive
angular.module('vTextfield.directives')
  .directive('vTextfieldInput', vTextfieldInput);


function vTextfieldInput (textfieldConfig) {
    return {
      restrict: 'A',
      require: ['^vTextfield', 'ngModel'],
      scope: {
        ngRequired: '=?ngRequired'
      },
      link: function (scope, iElement, iAttrs, ctrls) {
        if ( !ctrls[0] && !ctrls[1] ) { return; }

        var textfieldCtrl = ctrls[0];
        var ngModelCtrl = ctrls[1];

        ngModelCtrl.$formatters.push(function(value) {
          textfieldCtrl.setHasValue(isNotEmpty(value));
          return value;
        });

        if (angular.isDefined(iAttrs.required)) {
          textfieldCtrl.setIsRequired(true);
        } else if (angular.isDefined(scope.ngRequired)) {
          scope.$watch('ngRequired', function (value) {
            textfieldCtrl.setIsRequired(value);
          });
        } else {
          textfieldCtrl.setIsRequired(false);
        }

        scope.$watch(function () { return ngModelCtrl.$valid; }, function (value) {
          textfieldCtrl.setIsValid(value);
        });

        scope.$watch(function () { return ngModelCtrl.$dirty; }, function (value) {
          textfieldCtrl.setIsDirty(value);
        });

        function onInput () {
          textfieldCtrl.setHasValue(isNotEmpty());
        }

        function onInputFocus () {
          textfieldCtrl.setIsFocused(true);
        }

        function onInputBlur () {
          textfieldCtrl.setIsFocused(false);
        }

        textfieldCtrl.setIsFocused(false);
        
        iElement
          .bind('input', onInput)
          .bind('focus', onInputFocus)
          .bind('blur', onInputBlur);

        scope.$on('$destroy', function () {
          textfieldCtrl.setIsFocused(false);
          textfieldCtrl.setHasValue(false);

          iElement
            .unbind('input', onInput)
            .unbind('focus', onInputFocus)
            .unbind('blur', onInputBlur);
        });

        function isNotEmpty (value) {
          value = angular.isUndefined(value) ? iElement.val() : value;
          return (angular.isDefined(value) && (value !== null) && (value.toString().trim() !== ''));
        }
      }
    };
  }
  vTextfieldInput.$inject = ['textfieldConfig'];




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


}(angular));