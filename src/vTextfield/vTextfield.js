

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
