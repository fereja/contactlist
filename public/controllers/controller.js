/*function AppCtrl(){
    console.log("hello from controller")
}*/


var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', 
function($scope, $http) {
    console.log("Hello World from controller");
    
    $http.get('/contactlist').then(function(response){
    console.log("I got the data I requested");
    
    $scope.contactlist = response;
    })
  /*  person1 = {
        name :'jone',
        email:'jone@email.com',
        phone:'206-343-4343'
    };
    person2={
        name:'Ema',
        email:'ema@mail.com',
        phone:'202-343-8977'
    };
    person3={
        name:'samri',
        email:'samri@aol.com',
        phone:'204-456-8932'
    }
    var contactlist =[person1,person2,person3];
    $scope.contactlist=contactlist;*/
}]);


   
