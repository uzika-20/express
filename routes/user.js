const express = require('express')
const router = express.Router()
router.get("/", (req, res) => {
    res.send("user list")
})
router.use(logger)




router.get("/new", (req, res) => {
    res.render("users/new",{firstName:"test"})
})


router.post("/", (req, res) => {
    res.send("create user")
})


router.route("/:id").get((req, res) => {
    console.log(req.user)
    res.send(`user Get with id ${req.params.id}`)
}).put((req, res) => {
    res.send(`update user with id ${req.params.id}`)
}).delete((req, res) => {
    res.send(`delete user  with id ${req.params.id}`)
})

const users = [{ name:"kyle" }, { name:"sally" }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = router