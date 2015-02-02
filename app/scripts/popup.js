
'use strict';
// This code successfully authenticates the extension.
// It acquires a token from https://edlnkr.herokuapp.com and saves it as a cookie.
// The Angular interceptor is set up to use this token for all communication with
// with the server.
// The code is disabled because the api does not require authentication, so this
// extra layer was unnecessary.

//$.ajax({
//  url: 'https://edlnkr.herokuapp.com/auth/local',
//  type: 'POST',
//  dataType: 'json',
//  data: {
//    'email': 'test@test.com',
//    'password': 'test'
//  },
//  success: function(data) {
//    chrome.cookies.set({"name": "token2", "url": "https://edlnkr.herokuapp.com", "value": data.token}, function (cookie) {
//      console.log(JSON.stringify(cookie));
//    });
//  },
//  error: function(err) {
//    console.error(arguments);
//  }
//});
