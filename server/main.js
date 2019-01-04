var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
	  edge = require('edge.js'),
	  accountController = require('./controllers/accountController');
	  
// setup
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
edge.registerViews(path.join(__dirname, './views'))

// initialize data
const viewmodel = { username: 'Mostafa' };

// home page
app.get('/', (req, res) => {
	res.send( edge.render('index', viewmodel) );
});

// api
app.use('/api/account', accountController);

// start server
var port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log('Listening on port ' + port);
});