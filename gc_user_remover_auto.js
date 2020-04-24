// ==UserScript==
// @name         GetCourse User Deleter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// vokina.club
// ЗАМЕНИТЕ YOUR_DOMAIN на ваш домен на GetCourse
// @match        https://YOUR_DOMAIN/pl/user/user
// @match        https://YOUR_DOMAIN/pl/user/user/index?*
// @match        http://YOUR_DOMAIN/pl/user/user
// @match        http://YOUR_DOMAIN/pl/user/user/index?*
// @grant        GM_openInTab
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @grant window.location
// @grant GM_addStyle
// ==/UserScript==

(function() {
    var $ = window.jQuery;
    'use strict';
    // DANGER! don't set this to true unless you really want to always delete users.
    var auto = false;
    // Your code here...
    if (document.getElementsByClassName('segment-rule')[0].style.display != 'none'){
        var matches = document.querySelectorAll('[data-col-seq="0"]');
        for(var i = 1; i < matches.length; i++) {
            var userid = matches[i].innerHTML;
            matches[i].innerHTML = '<a class="btn btn-danger btn-sm" name="delete_user_button" href="/user/control/user/delete/id/' + userid + '">DEL</a>' + userid;

        // This opens first element in the table to delete the user.
            if(i == 1 && auto) {

                var TargetLink = document.getElementsByName("delete_user_button")[0];


                if (TargetLink.href){
                    TargetLink.style="color: green;";
                    TargetLink.click()}
                else{
                    TargetLink.style="color: red;";
                }

            }
        }


    matches[1].click();
    }
})();
