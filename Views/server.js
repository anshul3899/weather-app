const express = require('express')
const app = express()
//To use req.body object
const bodyParser=require('body-parser')
//To use css files we need to take permissions from express 
app.use(express.static('public'));
//To use req.body object 
app.use(bodyParser.urlEncoded({extended: true}));

//implementation of get method
/*
app.get('/', function (req, res) {
  res.render('index')   
})
*/

app.post('/', function(req,res){  //using post method
	res.render('index')  // To render .ejs kind of files 
	console.log('req.body.city')
})
app.listen(3000, function () {
  console.log('App listening on port 3000!')
})