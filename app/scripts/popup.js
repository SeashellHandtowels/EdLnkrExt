/* global $ */
'use strict';

console.log('\'Allo \'Allo! Popup');
$.ajax({
  url: 'https://edlnkr.herokuapp.com/auth/local',
  type: 'POST',
  dataType: 'json',
  data: {
    'email': 'test@test.com',
    'password': 'test'
  },
  success: function(data) {
    chrome.cookies.set({"name":"token","url":"https://edlnkr.herokuapp.com","value": data.token},function (cookie){
      console.log(JSON.stringify(cookie));
      console.log(chrome.extension.lastError);
      console.log(chrome.runtime.lastError);
    });
  },
  error: function(err) {
    console.log(arguments);
  }
});
