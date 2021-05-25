const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: false
    },
    room: {
        type: String,
        required: false
    },
},{
    timestamps: true
})

module.exports = model('User', UserSchema)