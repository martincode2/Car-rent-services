const express = require("express")
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Martin Developer'))
app.listen(port, () => console.log('Server Is Started'))