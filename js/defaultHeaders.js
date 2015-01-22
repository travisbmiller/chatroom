var app = angular.module('chatroom');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'a7zQyh5SXhVFWMH9JxF08vsSE8pCoQd4JMwYT8cy', 'X-Parse-REST-API-Key': 'r8u7nlhmJqHoz7853Vb0W4m728wYXXkUI3cHj8mu'}
      return config;
    }
  };
});


     // config.headers = {'X-Parse-Application-Id': '5oA4oab0RNwHkfRrXt5WlMqDnzUu6bcmpf4P2uKy', 'X-Parse-REST-API-Key': 'ZIKuhgCABMrP0kLnSMlEYWYlljNWtHnJzYaKwWc8'}

