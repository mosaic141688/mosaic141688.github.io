const express = require('express')
const app = express()
//const cors = require('cors')

app.use(express.static('./'));

const port = 3003

app.listen(port,()=> console.log(`Lisening on port ${port}`))
