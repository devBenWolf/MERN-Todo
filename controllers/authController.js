import User from "../models/User.js"
import {StatusCodes} from "http-status-codes"
import { BadRequestError } from "../errors/index.js"




const register = async(req, res, next) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        throw new BadRequestError(`Please provide all values`)
    }
    const userExists = await User.findOne({email})
    if (userExists) {
        throw new BadRequestError(`Email already in use`)
    }

    const user = await User.create({name, email, password})
    console.log(user)
    const token = user.createJWT()

    // Cannot restrict what is sent back in response due to User.create(). This is a hardcoded workaround to receive only email, name and token:
    res.status(StatusCodes.CREATED).json({ user: {email: user.email, name: user.name}, token })
}

const login = async(req, res) => {
    res.send(`login function`)
}

const updateUser = async(req, res) => {
    res.send(`update user function`)
}

export {register, login, updateUser}