var config = {};

// Server address and port
config.app = {};
config.app.domain = 'localhost';
config.app.port =  process.env.PORT || 5000;
config.app.host = 'localhost:5000';

// Facebook credidentials
config.facebook = {};
config.facebook.clientId = '';
config.facebook.clientSecret = ''

// Parse.com credidentials for Kaiseki
config.kaiseki = {};
config.kaiseki.appId = "";
config.kaiseki.restApiKey = "";

// JWT(JSON Web Token) encode and decode module settings
config.jwtSimple = {};
config.jwtSimple.secret = 'foobard'

config.thumbnails = {}
config.thumbnails.enabled = false;
config.thumbnails.quality = 20;
// config.thumbnails = [1200, 600, 300]; // not usable yet

module.exports = config;
