angular.module("nautilusLanding",[])

.controller("landingController", function($scope){

  var tempData = {
    userName: ""
  };

  $http({
    method: 'POST',
    url: 'http://localhost:3000/call-get-models',
    data: 'data='+JSON.stringify(tempData),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(function(res){
    console.log("call-get-models response: ", res);
     response = JSON.parse(res.data);
    /* console.log("Parsed response: ", response);
    responseBody = JSON.parse(response.body);
    console.log("Parsed response body: ", responseBody); */

  /*  $memoryFactory.setResult(responseBody.result)
    console.log("Result : "  + responseBody.result)
    $location.url('step-4'); */
  },function(res){
      console.log('err : ' + res)
  })

})
