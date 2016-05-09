function MainController ($scope) {
  $scope.name = 'George Washington';
  $scope.email = 'gwashington@whitehouse.gov';
  $scope.phone = '0123456789';
}

angular
  .module('app', [])
  .controller('MainController', MainController);