const express = require('express')
const router = express.Router()
const queriesRouter = require('../controllers/queries-controller')

// INDEX
router.get("/", queriesRouter.index);
// CREATE
router.post('/', queriesRouter.create)
// SHOW/DETAILS
router.get("/:id", queriesRouter.getOne);
// DELETE
router.delete("/:id", queriesRouter.delete);

module.exports = router

