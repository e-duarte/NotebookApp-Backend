const User = require('../models/User.js')

module.exports = {
    async index(request, response) {

        if(request.headers.hasOwnProperty('id')){
            const { id } = request.headers
            const user = await User.findById(id)

        return response.json(user)
        }

        const users = await User.find({}).sort({_id: -1})

        return response.json(users)
    },

    // async find(request, response) {
    //     const { id } = request.headers

    //     const user = await User.findById(id)

    //     return response.json(user)
    // },

    async store(request, response) {
        
        const { type, name, school } = request.body


        const userExists = await User.findOne({ name: name })

        if (userExists) {
            console.log(`User ${name} already exists.`)
            return response.json(userExists)
        }

        if(type == 'teacher'){
            console.log(`Teacher ${name} created.`)
            const { region } = request.body
            const teacher =  await User.create({
                name,
                school,
                region,
                type
            })

            return response.json(teacher)
        }


        const { room } = request.body
        const user = await User.create({
            name,
            school,
            room,
            type
        })
        
        console.log(`Student ${name} created.`)
        return response.json(user)
    }
}