/* global $ */
'use strict';

console.log('\'Allo \'Allo! Popup');
chrome.storage.sync.get("token", function(data) {
  console.log(data);
});
$.ajax({
  url: 'https://edlnkr.herokuapp.com/auth/local',
  type: 'POST',
  dataType: 'json',
  data: {
    'email': 'test@test.com',
    'password': 'test',
  },
  success: function(data) {
    chrome.storage.sync.set({token: data.token});
  },
  error: function(data) {
    console.log(arguments);
  }
});
