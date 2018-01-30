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

app.listen(port, () => {
  
  console.log(`server is listening on ${port}`)
})
