describe('v-textfield directive', function () {

  var $compile;
  var textfieldConfig;
  var scope;
  var textfield;
  var input;

  var generateTextfield = function (options) {
    var defaults = {
      type: 'text',
      required: false
    };

    if (options) {
      angular.extend(defaults, options);
    }

    var template = '<div v-textfield>\n';
    template += '<input name="myTextfield" type="' + defaults.type + '" ng-model="model" v-textfield-input';
    template += (defaults.required) ? ' required>\n' : '>\n';
    template += '</div>';

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


  it('otherwise it should add `is-required` class', function() {
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

});