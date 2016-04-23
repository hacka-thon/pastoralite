var app = require('express')();
var routes = require('./routes.js');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Controll-Expose-Headers', 'token');

  next();
});


app.use(express.static(__dirname + '/../client/'));
app.use('/', routes);

app.listed(PORT, function(){
	console.log("pastoralist server listening on: " PORT)
})