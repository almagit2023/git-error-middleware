const express = require('express')
const fsPromises = require('fs').promises;

const app = express()
const port = 3000

app.get('/one', (req, res) => {
  fsPromises.readFile('./one.txt', "utf-8")
    .then(data => console.log(data))
    .catch(err => { // error handling logic 1
      console.error(err) // logging error
      res.status(500).send(err)
    })
})

app.get('/two', (req, res) => {
  fsPromises.readFile('./two.txt', "utf-8")
    .then(data => console.log(data))
    .catch(err => { // error handling logic 2
      console.error(err)
      res.redirect('/error') // redirecting user
    })
})

app.get('/error', (req, res) => {
  res.send("Custom error landing page.")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})