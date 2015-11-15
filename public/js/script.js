/*jslint indent: 2*/
/*jslint todo: true */
/*jslint plusplus: true */
/*jslint regexp: true */
/*jslint vars: true */
/*browser: true */
/*global window, location, console, document, $, J, frontPageFunction, addPostFunction, onePostFunction, editPostFunction, crossroads, a, FB */

$(document).ready(function () {
  "use strict";

  // connect-livereload via Gulp autorefreshes the site.
  if (location.href === "localhost:5000") {
    $("body").append('<script src="http://localhost:35729/livereload.js?snipver=1"></script>');
  }

  // hide loadin + show app
  $("#loading").hide();
  $("#app").show("fadeIn");

  function clearApp() {
    $("#app>div").hide();
    $('html,body').scrollTop(0);
  }

  // VIEWS
  // Front page view
  var frontPageView = function () {
    clearApp();
    $("#frontPage").show('fadeIn');
    frontPageFunction();
  };

  // MODEL
  // Set up routes
  crossroads.addRoute('/', frontPageView);

  // that's a 404 if the route structure is not matched
  crossroads.bypassed.add(function () {
    clearApp();
    $("#e404").show();
  });

  // start routing
  J.route(crossroads);

  // CONTROLLERS
  // Controller, "/"
  function frontPageFunction() {
    cl("front apge")
    /*
    J.get("Posts", 20).then(function (data) {
      if (data.error === "No such post") {
        $("#e404").show();
      } else {
        $("#frontPage").empty();
        var i;
        for (i = 0; i < data.length; i++) {
          $("#frontPage").append('<h3><a href="#/p/' + data[i].objectId + '">' + data[i].title + '</a></h3>');
        }
      }
    }); */
  }

});
