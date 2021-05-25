const Manager = require('../models/Manager.js')

module.exports = {
    async index(request, response) {
        const { id } = request.headers

        const managers = await Manager.find({
            $and: [
                { _id: { $ne:id } },
            ]
        }).sort({_id: -1})

        return response.json(managers)
    },

    async store(request, response) {
        
        const { name, username, password, role } = request.body
        console.log(name, username, password, role)
        // const { username } = request.body

        const userExists = await Manager.findOne({ user: username })

        if (userExists) {
            console.log(`User ${username} already exists.`)
            return response.json(userExists)
        }

        // const githubResponse = await axios.get(`https://api.github.com/users/${username}`)


        const manager = await Manager.create({
            name,
            username,
            password,
            role
        })
        
        console.log(`Manager ${username} created.`)
        return response.json(manager)
    }
}