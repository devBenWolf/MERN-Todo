import mongoose from "mongoose"
import validator from "validator"
import bcryptjs from "bcryptjs"
import  jwt  from "jsonwebtoken"

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxlength: 30
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email"
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
        select: false
    },
})

// .pre hook executes the function before updating the document
UserSchema.pre('save', async function() {
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
    //await compare(requestPassword, currentPassword)
})

UserSchema.methods.createJWT = function() {
    console.log(this)
   return jwt.sign({userId: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME}  )
}

export default mongoose.model(`User`, UserSchema)