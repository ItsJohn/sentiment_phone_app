(function () {
      'use strict';

      angular.module('sentimentAnalysis.page')
            .service('homeService', homeService);

      homeService.$inject = ['$http'];
      function homeService($http) {
            this.getKeywords = function() {
                  var url = 'http://192.168.1.8:5000/api/keywords';
                  return $http({
                        method: 'GET',
                        url: url,
                        dataType: 'json'
                  }).then(function (response) {
                        return response;
                  });
            }
            this.getSentiment = function(term) {
                  var url = 'http://192.168.1.8:5000/api/retrieveSentimentData';
                  return $http({
                        method: 'GET',
                        url: url,
                        dataType: 'json',
                        params: {
                              term: term.word,
                              platform: term.platform
                        }
                  }).then(function (response) {
                        return response;
                  });
            }
      };
})();
