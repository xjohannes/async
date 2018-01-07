const express = require('express')
const app = express()

const port = 3000

app.use(express.static('public'))

app.get('/firstAsync', (request, response) => {
	setTimeout(function() {
		response.send('secondAsync');
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
app.get('/errorResponse', (request, response) => {
	setTimeout(function() {
		//response.status(500).send('Noe gikk galt'); 		
		throw new Error('Something went wrong');
	}, 1300)
})

app.listen(port, () => {
  
  console.log(`server is listening on ${port}`)
})
