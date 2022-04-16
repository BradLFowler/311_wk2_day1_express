const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 5000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get("/", (req, res) => {
  res.send("Try /users in URL")
})

app.get("/users", (req, res) => {
  res.json(users)
})

app.post("/users", (req, res) => {
  const me = {
    _id: 6,
    name: "Brad",
    occupation: "Vending Machine Attendant"
  }
  res.json(me)
  users.push(me)
})

app.get("/users/:userId", (req, res) => {
  res.json(users[req.params.userId - 1])
})

app.put("/users/:userId", (req, res) => {
  users[req.params.userId - 1]._id = "3000"
  res.json(users[req.params.userId - 1])
})

app.delete("/users/:userId", (req, res) => {
  let deletedUsers = users.splice(req.params.userId - 1, 1)
  deletedUsers[0].isActive = false
  res.json(deletedUsers[0])
})


/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))