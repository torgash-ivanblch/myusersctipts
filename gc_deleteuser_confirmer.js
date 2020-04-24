// ==UserScript==
// @name         GC User Delete Confirm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://YOUR_DOMAIN/user/control/user/delete/id/*
// @match        http://YOUR_DOMAIN/user/control/user/delete/id/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByName("do_delete")[0].click()
    // Your code here...
})();
