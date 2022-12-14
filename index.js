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

function heartBeat(){
	console.log(`heartbeat`)
}

const interval = setInterval(heartBeat, 10000);

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: ' + add);
})


