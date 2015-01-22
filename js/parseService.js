var app = angular.module('chatroom');

app.service('parseService', function($http){

  //The url for the get request should be 'https://api.parse.com/1/classes/chat?order=-createdAt'

// This is to get messages from the room That is passed in

 this.getData = function (roomName) {
   return $http({
    method: "GET",
    url: 'https://api.parse.com/1/classes/' + roomName + '?order=-createdAt'
   })
   .then(function(res) {
      //console.log(roomName)
      return res;
   })
 };

 // post to 'classes/chat'
  this.postData = function (room,msg) {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/' + room,
      data: {text: msg}
    })
  }


// This is to POST to the room passed in
  this.postRoomName = function (roomName) {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/roomNames',
      data: {text: roomName}
    })
  }


// This is to Create a new Room (endpoint)
  this.createNewRoom = function (name) {
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/' + name,
      data: {text: "New Room Has Been Created"}
    }).then(function(){
      return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/roomNames',
      data: {text: name}
    })
    }, function(res){
      console.log(res)
    })
  }


/// This is getting RoomNames

  this.getRooms = function () {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/roomNames',
    }).then(function(res){
      return res.data.results;
    })
  }





});
