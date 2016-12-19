var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

<<<<<<< HEAD
var port = 3040;
=======
var port = 3080;
>>>>>>> 542f3318caf6005a4c1a49aec349459b8005fa82

// View engine

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set static angular content folder

app.use(express.static(path.join(__dirname,'client')));


// Body parser file
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// app.use('/',index);
app.use('/api',todos);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port,function(){
    console.log('Server started on port: ' + port);
});
