const { json } = require('body-parser')
const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client'))

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname+'/'+'index.html');
})
app.get('/convertJ',(req,res)=>{
   console.log(req.query.jsonText)
    res.end(JSON.stringify(req.query.jsonText));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})