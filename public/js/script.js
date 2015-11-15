/*jslint indent: 2*/
/*jslint todo: true */
/*jslint plusplus: true */
/*jslint regexp: true */
/*jslint vars: true */
/*browser: true */
/*global window, location, console, document, FormData, $, J, frontPageFunction, addPostFunction, onePostFunction, editPostFunction, crossroads, a, FB */

$(document).ready(function () {
  "use strict";

  // connect-livereload via Gulp autorefreshes the site.
  if (location.host === "localhost:5000") {
    $("body").append('<script src="http://localhost:35729/livereload.js?snipver=1"></script>');
  }

  // hide loadin + show app
  $("#loading").hide();
  $("#app").show("fadeIn");

  var loader = '<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>';

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

    //$("#comments").commentizzze('ijur89');

    $("#comments").html(loader);

    socket.on('getUp', function () {
        //cl("got getUp")
    });

    socket.on('commenting', function (data) {
      $("#comments").append(data.comment + "<br />");
    });

    J.query("Comments", 20, "relatedId", 'demo', '-createdAt').then(function (data) {
      if (data.error === "No such post") {
        // no comments yet;
        $("#comments").empty();
        $("#comments").append('<span style="color: #999;">No comments yet</span>');
      } else {
        var i;
        $("#comments").empty();
        for (i = 0; i < data.length; i++) {
          if (data[i].comment) {
            $("#comments").prepend(data[i].comment + "<br />");
          }
        }
      }
    });

    $("#commentsForm").unbind("submit").on("submit", function (event) {

      event.preventDefault();

      var commentText = $("#commentText").val();
      $("#commentText").val('');

      socket.emit('commenting', { comment: commentText});

      var comment = new FormData();
      comment.append("comment", commentText);
      comment.append("user", '0');
      comment.append('relatedId', 'demo');

      J.post("Comments", comment).then(function (response) {
        // currently we do not deal with that yet.
      });

    });
  }

});
