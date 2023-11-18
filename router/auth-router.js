const express = require("express");
const router = express.Router()

router.get("/" , (req , res) => {
    res.send("Hello Home Page")
})

// another way to write a router code
router.route("/anotherway").get((req , res) => {
    res.send("Hello another way ....")
})

router.get("/register" , (req , res) => {
    res.send("Registration Home Page")
})

module.exports = router ;


