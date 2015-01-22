var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  // setting starting feed to 'chat'
 $scope.currentRoom = "main"

  $scope.getParseData = function(roomName) {
    parseService.getData($scope.currentRoom).then(function(res){
      console.log(res)
      $scope.messages = res.data.results;
    })
  }


$scope.getParseData();

  // pull list of rooms
  $scope.getRooms = function() {
    parseService.getRooms().then(function(res){
      $scope.rooms = res
    })
  }

  $scope.getRooms();

   setInterval(function(){
     $scope.getRooms();
   }, 1500)


  $scope.postData = function () {
    parseService.postData($scope.currentRoom, $scope.message).then(function() {
      $scope.getParseData();
      $scope.message = "";
    });
  }

  // Create a new endpoint
  $scope.createRoom = function () {
    console.log($scope.roomName);
    parseService.createNewRoom($scope.roomName);
  }

  // This will switch the messages to the room your click on
  $scope.switchRoom = function (room) {
    console.log(room);
    $scope.currentRoom = room;
    $scope.getParseData($scope.currentRoom);
  }

  //This goes and gets new data every second, which mimicking a chat room experience.
  // setInterval(function(){
  //   $scope.getParseData($scope.currentRoom);
  // }, 1500)

})
