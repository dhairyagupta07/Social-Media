import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import genToken from "../utils/genToken.js"

export const registerUser = async(req, res) =>{

    const {name, username, email, password} = req.body

    // validations
    try{
        if(!username || !name || !password || !email){
            return res.status(422).json({message: 'All fields required'})
        }
        // does username exists
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({message: 'username already exists'})
        }
        const emailExists = await User.findOne({email})
        if(emailExists){
            return res.status(400).json({message: 'email already exists'})
        }

        if(password.length < 6){
            return res.status(400).json({message: 'password length should be greater than or Equal to 6'})
        }
        const salt = await bcrypt.genSalt(10);
        //console.log(salt);
        const hashedPassword = bcrypt.hashSync(password, 10)

        const newUser = await User.create({username, name, password: hashedPassword, email})

        // Generate JWT 
        const token = genToken(newUser._id)
        //console.log(token)

        res.status(201).json(newUser)
    }
    catch{
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const loginUser = async(req, res) =>{
    // Login the user
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(422).json({message: 'All fields required'})
        }

        const userExists = await User.findOne({email})
        if(!userExists){
            return res.status(404).json({message: 'User Not Found'})
        }

        const correctPassword = bcrypt.compareSync(password, userExists.password);
        if(!correctPassword){
            return res.status(401).json({message: 'User Not Found'})
        }

        res.status(200).json({message: 'Login Successful', user: userExists})
    } catch (error) {
        return res.status(500).json({message: 'Internal Server Error'})
    }
}