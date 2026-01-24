const express = require("express");
const router = express.Router();

//Index - users
router.get("/posts", (req, res) => {
    res.send("GET for posts");
});

//Show - users
router.get("/posts/:id", (req, res) => {
    res.send("GET for post id");
});

//POST - users
router.post("/posts", (req, res) => {
    res.send("POST for posts");
});

//DELETE - posts
router.delete("/posts/:id", (req, res) => {
    res.send("DELETE for post id");
});

module.exports = router;