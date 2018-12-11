const express = require('express')
const PORT = process.env.PORT || 5000
const path = require('path')
const bodyParser = require('body-parser')

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .post('/test', (req, res) => {res.send({"status":200, "Content-type":"application/json", "challenge":req.body.challenge});})
  .post('/novaquote', (req, res) => res.send({"status": 200, "Content-type":"application/json", "body":req.body.text}))
  .listen(PORT, () => console.log('Novabot API listening on ${ PORT }'))

