(function () {
      'use strict';

      angular.module('sentimentAnalysis.page')
            .controller('analysisController', analysisController);

      analysisController.$inject = ['$scope', '$location', 'analysisService'];
      function analysisController($scope, $location, analysisService) {
            var vm = $scope,
                  positive,
                  negative,
                  info = analysisService.getData(),
                  data = info['data'],
                  positiveColor = '#2F47FF',
                  negativeColour = '#FF4D3C';


            if(_.isUndefined(info['term'])) {
                  $location.path('home');
            } else {
                  vm.tweets = data['tweets'];
                  vm.term = _.startCase(info['term']);
                  positive = data['sentiment']['positive'];
                  negative = data['sentiment']['negative'];

                  vm.legend = [{
                        'name': 'positive',
                        'color': positiveColor
                  }, {
                        'name': 'Negative',
                        'color': negativeColour
                  }];

                  vm.max = new Date(data['newest'])
                  vm.min = new Date(data['latest'])

                  vm.pie = [{
                        'name': 'positive',
                        'value': positive | 0,
                        'color': positiveColor
                  }, {
                        'name': 'negative',
                        'value': negative | 0,
                        'color': negativeColour
                  }];
            }
            vm.goBack = function() {
                  $location.path('home');
            }
      }
})();
