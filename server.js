var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
                      
var app = express();

var logger = function(req, res, next) {
  console.log('\n\n------------------------------\n------------------------------\n\n');
  console.log('\n___HEADERS___\n', req.headers);
  console.log('\n___BODY___\n', req.body);
  console.log('\n___SESSION___\n', req.session);
  next();
};

app.use(bodyParser.json());
app.use(session({
    secret: "qerwe-089afdfafs-8-";
    saveUninitialized: false,
    resave: false
}));

app.listen(8800, function() {
    console.log("listening on port:", port);
});