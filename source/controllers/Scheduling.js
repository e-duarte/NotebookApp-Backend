const Scheduling = require('../models/Scheduling.js')
const Manager = require('../models/Manager.js')
const User = require('../models/User.js')

module.exports = {
    async index(request, response) {
        
        var schedulings = await Scheduling.find({}).sort({_id: -1})
        
        var schedulingsResponse = []
        for(var i = 0; i < schedulings.length; i++){
            try {
                const manager = await Manager.findById(schedulings[i].manager)
                const user = await User.findById(schedulings[i].user)
                
                const createdAt = schedulings[i]['createdAt']
                const updatedAt = schedulings[i]['updateAt']

                schedulingsResponse.push({
                    manager: manager,
                    user: user,
                    eventName: schedulings[i].eventName,
                    from: schedulings[i].from,
                    to: schedulings[i].to,
                    background: schedulings[i].background,
                    isAllDay: schedulings[i].isAllDay,
                    isRepeate: schedulings[i].isRepeate,
                    description: schedulings[i].description,
                    createdAt: createdAt,
                    updatedAt: updatedAt,
                })
            } catch (error) {
                console.log('error')
            }

            // console.log(schedulingsResponse[0])
           
        }
        return response.json(schedulingsResponse)
    },

    async store(request, response) {
        var {
            manager,
            user,
            eventName,
            from,
            to, 
            background,
            isAllDay,
            isRepeate,
            description,
        } = request.body

        var scheduling = {}
        try {
            scheduling = await Scheduling.create({
                manager,
                user,
                eventName,
                from,
                to, 
                background,
                isAllDay,
                isRepeate,
                description,
            })
        } catch (error) {
            console.log('erro')
        }
        
        
        console.log(`The ${eventName} was created.`)
        var schedulingResponse = {}
        try {
            manager = await Manager.findById(manager)
            user = await User.findById(user)
            schedulingResponse = {
                manager: manager,
                user: user,
                eventName: scheduling.eventName,
                from: scheduling.from,
                to: scheduling.to, 
                background: scheduling.background,
                isAllDay: scheduling.isAllDay,
                isRepeate: scheduling.isRepeate,
                description: scheduling.description,
                createdAt: scheduling['createdAt'],
                updatedAt: scheduling['updatedAt'],
            }
        } catch (error) {
            console.log(error)
        }
        
        return response.json(schedulingResponse)
    }
}