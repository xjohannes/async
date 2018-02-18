const chapters = require('./public/data/chapters.json');
const _ = require('lodash');

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/firstAsync', (request, response) => {
	setTimeout(function() {
		response.status(200).send('secondAsync');
	}, 500)
})
app.get('/secondAsync', (request, response) => {
	setTimeout(function() {
		if(Math.ceil(Math.random() * 100) % 10 >= 9) {
			throw new Error('Something went wrong');
		}
		response.status(200).send("This is the result of the second async call") 
	}, 300)
})
app.get('/throwErrorResponse', (request, response) => {
	setTimeout(function() {
		//response.status(500).send('Noe gikk galt'); 		
		throw new Error('Something went wrong');
	}, 1300)
})
app.get('/return400Response', (request, response) => {
	setTimeout(function() {
		//response.status(500).send('Noe gikk galt'); 		
		response.status(400).send('Bad, bad request');
	}, 1300)
})

// Story
app.get('/story', (req, res) => {
	setTimeout(function() {
		//res.status(404).send("Not found");
		res.status(200).send({"title":"The tale of two towers - the Callback and the Promise", "chapterURLs": ["story/1","story/2","story/3"]});
	}, 500);
});
app.get('/story/:chapter', (req, res) => {
	console.log("req.params", req.params.chapter);
	//console.log("Chapter", chapters);
	var data = _.find(chapters, (obj) => obj.chapter === req.params.chapter);

	console.log("CHAPTER", data);
	setTimeout(function() {
		res.status(200).send(data);
	}, (Math.random() * 1000));
})

app.listen(port, () => {
  
  console.log(`server is listening on ${port}`)
})
