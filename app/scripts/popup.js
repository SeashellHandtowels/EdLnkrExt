/* global $ */
'use strict';

console.log('\'Allo \'Allo! Popup');
$.ajax({
    url: 'https://edlnkr.herokuapp.com/auth/local',
    type: 'POST',
    dataType: 'json',
    data: {
      'username': 'test@test.com',
      'password': 'test',
    },
    success: function(data) {
      debugger
      chrome.cookies.set(data);
    }
});