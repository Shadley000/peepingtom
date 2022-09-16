const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
	console.log('Hello World!')
	res.send('Hello World!')
})

app.get('/env', (req, res) => {
	console.log('/env')
	res.send(process.env)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})