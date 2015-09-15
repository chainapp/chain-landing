appServices.service('subscriberService', function ($rootScope,$http,$q) {

this.subscribeCall = function(name,mail) {
  var deferred = $q.defer();
  console.log('in subscriber service')
  $http({
    method: 'GET',
    url: 'http://chain-backoffice-qlf.elasticbeanstalk.com/subscribe?name='+name+'&mail='+mail,
    //url: 'http://lb.qlf-waas.priv.atos.fr:8068/getArret',
    headers: {'Content-type':'application/json'}
  }).
  success(function (data, status, headers, config) {
    deferred.resolve(data);
  }).
  error(function (data, status) {
    deferred.reject(data);
  });

  return deferred.promise;

}

    /*this.fetch = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8081/subscribers',
            //url: 'http://lb.qlf-waas.priv.atos.fr:8068/getArret',
            headers: {'Content-type':'application/json'}
        }).
            success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function (data, status) {
                deferred.reject(data);
            });

        return deferred.promise;

    }


this.count = function() {
  var deferred = $q.defer();
  $http({
    method: 'GET',
    url: 'http://localhost:8081/subscribers/count',
    //url: 'http://lb.qlf-waas.priv.atos.fr:8068/getArret',
    headers: {'Content-type':'application/json'}
  }).
      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (data, status) {
        deferred.reject(data);
      });

  return deferred.promise;

}*/
});
