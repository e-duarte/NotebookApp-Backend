const { Schema, model } = require('mongoose')

const SchedulingSchema = new Schema({
    manager: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    background: {
        type: Number,
        required: true
    },
    isAllDay: {
        type: Boolean,
        required: true
    },
    isRepeate: {
        type: Boolean,
        required: true
    },
    description: {
        type: String,
        required: true
    },    
},{
    timestamps: true
})

module.exports = model('Scheduling', SchedulingSchema)