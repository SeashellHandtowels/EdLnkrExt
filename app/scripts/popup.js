/* global $ */
'use strict';

$.ajax({
  url: 'https://edlnkr.herokuapp.com/auth/local',
  type: 'POST',
  dataType: 'json',
  data: {
    'email': 'test@test.com',
    'password': 'test'
  },
  success: function(data) {
    chrome.cookies.set({"name": "token2", "url": "https://edlnkr.herokuapp.com", "value": data.token}, function (cookie) {
      console.log(JSON.stringify(cookie));
    });
  },
  error: function(err) {
    console.error(arguments);
  }
});
