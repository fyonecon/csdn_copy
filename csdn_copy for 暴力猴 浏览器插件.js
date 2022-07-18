// ==UserScript==
// @name CSDN Copy
// @namespace AceScript Scripts
// @match *://blog.csdn.net/*
// @grant none
// ==/UserScript==
const bra = {
  del_csdn_copy: function (){
      console.log("del_csdn_copy-fyonecon");
      let blog = document.getElementById("content_views");
      blog.setAttribute("id", "content_views2");
  },
};

(function (){
  "use strict";
  bra.del_csdn_copy();

})();
