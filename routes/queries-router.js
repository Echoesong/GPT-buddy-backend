const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
	res.status(200).json({message: "queries index route"})
});

router.post('/', async (req, res) => {
    res.status(200).json({message: "queries create route"})
})

module.exports = router

