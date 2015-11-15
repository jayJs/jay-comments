
var express = require('express')
  , http = require('http')
  , https = require('https')
  , path = require('path')
  , app = express()
  , server = http.createServer(app)
  , config = require(__dirname + '/config')
  , Jay = require('jay-npm')
  , J = Jay
  , port = process.env.PORT || config.app.port;

app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'Please_change_me_now' }));
  app.use(app.router);
  app.use(require('connect-livereload')());
  app.use(express.logger('dev'));
  app.use(express.methodOverride());
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/public', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/public'));
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
});

app.post('/auth/fb', function(req, res) {
  Jay.logIn(req, res, config, function(data){
    res.jsonp(data);
  })
})

// Get content
app.get('/api/j', function(req, res){
  Jay.get(req, res, config, function(data){
    res.jsonp(data);
  });
});

// Post content
app.post('/api/j', J.ensureAuthenticated, function(req, res){
  Jay.post(req, res, config, function(data){
    res.jsonp(data);
  })
});

app.put('/api/j', function(req, res){
  Jay.put(req, res, config, function(data){
    res.jsonp(data);
  })
});

// Get query
app.get('/api/j/query', function(req, res){
  Jay.query(req, res, config, function(data){
    res.jsonp(data);
  });
});

// Send the index.html
app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

server.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
