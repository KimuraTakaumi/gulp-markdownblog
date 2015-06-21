angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope,$modal) {

  $scope.devices = [
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  { id: 1, os: "Android",  model: "nexus7", maker: "Asus", arch: "arm", bit: "32bit", version: "5.0", place : "MC1", last_day : "2014/2/23", last_user : "tkimura", used : true, check : "2014/4/23", add : "2014/4/23" },
  ];

  $scope.showModal = function () {
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalCtrl',
    });
    modalInstance.result.then(function (results) {
      // ok
    }, function () {
      // dismiss
    });
  };

  $scope.methodA = function(index) {
      alert(index);
  };

});

angular.module('ui.bootstrap.demo')
  .controller('ModalCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
    $scope.input1 = '';
    $scope.ok = function () {
      var results = {
        input1: $scope.input1
      };
      $modalInstance.close(results);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss();
    };
  }]);
