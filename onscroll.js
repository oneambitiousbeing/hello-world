/*
onsroll.js

TRANSFORMS div(s) ON SCROLLING

*/


document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(){
    scroll();
  }

  window.addEventListener('scroll', scroll);

  var header = document.getElementById("header");
  var mb = document.getElementById("menu-before");
  var spc = document.getElementById("spacing");
  var snd = document.getElementById("site-name-div")
  var sn = document.getElementById("site-name");
  var search = document.getElementById("search");
  var loc = document.getElementById("location");
  var ff = document.getElementById("find-food");
  var ma = document.getElementById("menu-after");
  var vg = document.getElementById("veg");
  var nvg = document.getElementById("non-veg");
  
  var spc_list = spc.classList;

  var pos_top = header.offsetTop;
  function scroll()
  {
     if (window.pageYOffset > pos_top)
     {
       header.style.height = "100px";
       header.classList.remove("header");
       header.classList.add("header-after");
       header.classList.add("w3-green");

       mb.classList.add("hidden");
       ma.classList.remove("hidden");

       snd.classList.remove("site-name-div");
       snd.classList.add("site-name-div-after");
       snd.classList.add("w3-quarter");

       sn.classList.remove("site-name");
       sn.classList.add("site-name-after");

       search.classList.remove("search");
       search.classList.add("search-after");
       search.classList.add("w3-half");
       search.classList.add("w3-mobile");
       search.classList.add("w3-green");

       loc.classList.remove("location");
       loc.classList.add("location-after");
       
       ff.classList.remove("find-food");
       ff.classList.add("find-food-after");


       spc.classList.add("hidden");




     }
     else {
      header.classList.remove("header-after");
      header.classList.remove("w3-green")
      header.classList.add("header");

      ma.classList.add("hidden");
      mb.classList.remove("hidden");

      snd.classList.remove("site-name-div-after");
      snd.classList.remove("w3-quarter");
      snd.classList.add("site-name-div");

      sn.classList.remove("site-name-after");
      sn.classList.add("site-name");

      search.classList.remove("search-after");
      search.classList.remove("w3-half");
      search.classList.remove("w3-mobile");
      search.classList.remove("w3-green");
      search.classList.add("search");

      loc.classList.remove("location-after");
      loc.classList.add("location");
      
      ff.classList.remove("find-food-after");
      ff.classList.add("find-food");

      spc.classList.remove("hidden");  
      
     }
  }
})