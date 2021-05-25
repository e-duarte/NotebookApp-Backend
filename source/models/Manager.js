const { Schema, model } = require('mongoose')

const ManagerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = model('Manager', ManagerSchema)