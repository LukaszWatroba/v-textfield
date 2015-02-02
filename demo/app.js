(function (angular) {
  'use strict';

  angular
    .module('myApp', [ 'ngMessages', 'vTextfield' ])

    .config(function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
    })

    .controller('MainController', function ($scope) {
      $scope.model = {
        myName: 'Łukasz',
        myEmail: '',
        myPassword: ''
      };
    });

})(angular);