describe('v-textfield directive', function () {

  var $compile;
  var textfieldConfig;
  var scope;
  var textfield;
  var input;

  var generateTextfield = function (options) {
    var defaults = {
      type: 'text',
      required: false,
      placeholder: false
    };

    if (options) {
      angular.extend(defaults, options);
    }

    var template = '<v-textfield>';
    template += '<input name="myTextfield" type="' + defaults.type + '" ng-model="model" v-textfield-input';
    template += (defaults.required) ? ' required>' : '';
    template += (defaults.placeholder) ? ' placeholder="">' : '';
    template += '>';
    template += '</v-textfield>';

    textfield = $compile(template)(scope)
    input = textfield.find('input');
  };



  beforeEach(module('vTextfield'));

  beforeEach(inject(function ($rootScope, _$compile_, _textfieldConfig_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
    textfieldConfig = _textfieldConfig_;
  }));

  afterEach(function () {
    scope.$destroy();
  });



  it('should add `has-noValue` class if `model` has no value or is undefined', function() {
    generateTextfield();

    scope.$digest();

    expect(textfield.hasClass('has-noValue')).toBe(true);
  });


  it('should add `has-value` class if `model` has value', function() {
    generateTextfield();

    scope.model = 'Hello!';
    scope.$digest();

    expect(textfield.hasClass('has-noValue')).toBe(false);
    expect(textfield.hasClass('has-value')).toBe(true);
  });


  it('should add `is-optional` class if input is not required', function() {
    generateTextfield();

    scope.$digest();

    expect(textfield.hasClass('is-optional')).toBe(true);
  });


  it('should add `is-required` class if input is required', function() {
    generateTextfield({ required: true });

    scope.$digest();

    expect(textfield.hasClass('is-optional')).toBe(false);
    expect(textfield.hasClass('is-required')).toBe(true);
  });


  it('should add `is-blured` or `is-focused` class if input is focused', function() {
    generateTextfield();

    scope.$digest();

    expect(textfield.hasClass('is-blured')).toBe(true);

    input.focus();

    expect(textfield.hasClass('is-blured')).toBe(false);
    expect(textfield.hasClass('is-focused')).toBe(true);
  });


  it('should add `has-placeholder` class if input has placeholder attribute', function() {
    generateTextfield({ placeholder: true });

    scope.$digest();

    expect(textfield.hasClass('has-placeholder')).toBe(true);
  });


  it('should add `has-noPlaceholder` class if input has no placeholder attribute', function() {
    generateTextfield();

    scope.$digest();

    expect(textfield.hasClass('has-placeholder')).toBe(false);
    expect(textfield.hasClass('has-noPlaceholder')).toBe(true);
  });

});