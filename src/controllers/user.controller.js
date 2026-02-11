
const { User } = require("../models")

exports.register = async (req, res) => {
try {
        const {name, email, password} = req.body
    
        if(!name || !email || !password){
            res.status(400).json({
                message: "All fields are required"
            })
        }
    
        const existingUser = await User.findOne({where: {email}})
        if(existingUser){
            res.status(400).json({
                message: "User already exists"
            })
        }
    
        const user = await User.create({
            name: name,
            email: email,
            password: password
        })
    
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
} catch (error) {
    res.status(500).json({
        message: error.message
    })
}
}

exports.login = () => {

}