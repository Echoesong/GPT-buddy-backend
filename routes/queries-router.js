const express = require('express')
const router = express.Router()
const queriesCtrl = require('../controllers/queries-controller')
const getGPT = require('../middleware/openAi')

// INDEX
router.get("/", queriesCtrl.index);
// CREATE
router.post('/', getGPT, queriesCtrl.create)
// SHOW/DETAILS
router.get("/:id", queriesCtrl.getOne);
// DELETE
router.delete("/:id", queriesCtrl.delete);

module.exports = router

