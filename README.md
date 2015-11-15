Node-Jay
===================

A boilerplate for Single Page App relying on [Jay](https://github.com/jayJs/jay) in front end and [Jay-npm](https://github.com/jayJs/jay-npm) on back end.  

[**Instant back-end**](https://github.com/jayJs/jay-npm)  
Express server via Node  
REST API service with JSONP replies.  
Database and backend via Parse.com  
Authentication via FB SDK  
Gulp livereload
Heroku Procfile
  
[**Instant front-end**](https://github.com/jayJs/jay)  
jQuery  
Bootrap  
Animate.css  
Crossroads.js - routing  
MomentJS - date manipulations  
FB SDK - Facebook integration  
Bower - package management, configured folder "bower_components" to "b"  
RespondJs - brings media queries to IE 6-8
Html5Shiv - brings HTML5 to IE  
Jay - jQuery MVC framework for rapid building Single Page Applications  

##INSTALLATION AND STARTING UP  

(Assuming you have npm & bower installed)  

Install npm and bower things:  
```
npm install  
cd public  
bower install  
```  
Copy default_config.js to config.js and fill it with correct credentials.  
In order for everything to work properly Facebook app and parse.com credentials are required.  
Set config.jwtSimple.secret into a string of your own choice.  

Run the server:  
```
node app.js
```  
Go to: http://localhost:5000/ (or any other port you set at config).  

Gulp is set up to reload the client every time a js or html file is changed.
To run it, open a new terminal in the same directory and (assuming you have Gulp installed):  
```
gulp  
```  
Then go to /public/js/script js and uncomment this line in the beginning of file:
```  
$("body").append('<script src="http://localhost:35729/livereload.js?snipver=1"></script>');
```  

##INSTALLATION 2  

I've created a fancy shortcut for .bash_profile.  
It does most of the things from INSTALLATION 1 automatically:  
```
alias initio='git clone git@github.com:jayJs/node-jay.git .;git remote remove origin; npm install; cd public; b install;'
```
You might wan't to change "npm install" to "sudo npm install" depending on your npm settings.  

##Licence  

The MIT License (MIT)  

Copyright (c) 2014, 2015 Martin Sookael  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  
