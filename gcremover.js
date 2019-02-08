// ==UserScript==
// @name         GetCourse User Deleter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// PLACE YOUR DOMAIN HERE
// ЗАМЕНИТЕ YOUR_DOMAIN на ваш домен на GetCourse
// @match        https://YOUR_DOMAIN/pl/user/user
// @match        https://YOUR_DOMAIN/pl/user/user/index
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    var matches = document.querySelectorAll('[data-col-seq="0"]');
      for(var i = 0; i < matches.length; i++) {
          var userid = matches[i].innerHTML;
        matches[i].innerHTML = '<a href="/user/control/user/delete/id/' + userid + '"><img style="height:32px;width:32px;" src="https://fs.getcourse.ru/fileservice/file/download/a/744/sc/189/h/c4a8c4f7226d570d2afe4313cf6444e2.png"></a>' + userid;
      }
})();
