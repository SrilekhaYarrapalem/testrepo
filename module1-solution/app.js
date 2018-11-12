(function () {
'use strict';

var app=angular.module('LunchCheck', [])
app.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.msg;
$scope.list;
//$scope.customColor={};
$scope.Check=function(){
console.log($scope.list.length);
$scope.list = $scope.list.split(",");
  if(!$scope.list){
  $scope.msg="Please enter some items!"
}
//  else if($scope.list.length<=3)
else
{
  let listSplit = $scope.list.toString().split(",");
  if (listSplit.length<=3) {
    $scope.msg="Enjoy!"
  }
  else {
    $scope.msg="Too Much!"

//$scope.customColor.style={"color":"green"};
//$scope.customColor.style={"color":"red"};

};
          };
      };
  };
})();
