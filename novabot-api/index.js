const express = require('express')
const PORT = process.env.PORT || 5000
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

var uri = "mongodb+srv://dani:12345@cluster0-hvnbg.mongodb.net/test?retryWrites=true";

MongoClient.connect(uri, function(err, db) {
  if(err) console.log(err.msg)
  else {
    db.close();
  }
});

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/test', (req, res) => {res.send({"status":200, "Content-type":"application/json", "challenge":req.body.challenge});})
  .post('/novaquote', (req, res) => res.send(req.body))
  .listen(PORT, () => console.log(`Novabot API listening on ${ PORT }`))

