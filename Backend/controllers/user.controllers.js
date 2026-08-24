import User from "../models/user.model.js"

export const registerUser = async(req, res) =>{

    const {name, username, email, password} = req.body

    // validations
    try{
        if(!username || !name || !password || !email){
            return res.status(422).json({message: 'All fields required'})
        }
        // does username exists
        const userNameExists = await User.findOne({username})
        if(userNameExists){
            return res.status(400).json({message: 'username already exists'})
        }
        const emailExists = await User.findOne({email})
        if(emailExists){
            return res.status(400).json({message: 'email already exists'})
        }

        if(password.length <= 6){
            return res.status(400).json({message: 'password length should be greater than 6 character'})
        }

        const User = User.create({username, name, password, email})
        res.send(newUser)
    }
    catch{

    }
}