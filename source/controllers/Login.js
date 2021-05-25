const Manager = require('../models/Manager.js')

module.exports = {
    async store(request, response) {
        
        const { username, password } = request.body
        console.log(username, password)

        const user = await Manager.findOne({ username: username })
        console.log(user.password == password)

        if (user == null || user.password != password) {
            console.log(`User ${username} not exists or matched password.`)
            return response.status(404).json({'response': 'not found'});
        }
       
        return response.json(user)
    }
}