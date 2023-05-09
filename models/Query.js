const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
    submission: { type: String, required: true },
    response: { type: String, required: true },
    analysis: { type: String }
}, {
    timestamps: true
})


const Query = mongoose.model('Query', QuerySchema)
module.exports = Query