

// vTextfieldInput directive
angular.module('vTextfield.directives')
  .directive('vTextfieldInput', vTextfieldInput);


function vTextfieldInput () {
    return {
      restrict: 'A',
      require: ['^vTextfield', 'ngModel'],
      scope: {
        ngRequired: '=?ngRequired'
      },
      link: function (scope, iElement, iAttrs, ctrls) {
        if ( !ctrls[0] && !ctrls[1] ) { return; }

        var textfieldCtrl = ctrls[0],
            ngModelCtrl = ctrls[1];

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

        textfieldCtrl.setHasPlaceholder( angular.isDefined(iAttrs.placeholder) );

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

