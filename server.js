const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3000
// var jtocsv = require('./client/app.js')

app.use(express.static('client'))
app.use(express.json());
app.use(bodyparser.urlencoded());

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname+'/'+'index.html');
})
app.post('/convertJ',(req,res)=>{
  //  console.log("post request",req.query.data)
  //  res.end(jtocsv({a:1}))
  res.end(jtocsv(req.body.data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let jtocsv = (obj) => {
  // var pObj=JSON.parse(obj);
  var result = '';
  result += Object.keys(obj).slice(0, -1).join(',');
  result += "\n";
  var valRec = function () {
      result+=Object.values(obj).slice(0,-1).join(',');
      // but if we have nested object or children has keys and values.
      if(typeof obj.children==='object'){
          for(var i=0;i<obj.length;i++){
              valRec(obj[i]);
          }
      }
  }
  valRec(obj);

  return result;
}