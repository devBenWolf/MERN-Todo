import express from "express"
import "express-async-errors"
const app = express()
import dotenv from "dotenv"
dotenv.config()

// DB and authentication
import connectDB from "./db/connect.js"

// routers
import authRouter from "./routes/authRoutes.js"
import todoRouter from "./routes/todoRoutes.js"

// middleware
import notFound from "./middleware/not-found.js"
import errorHandler from "./middleware/error-handler.js"

app.use(express.json())

app.get(`/`, (req, res) => {
    res.send(`Hello!`)
})

app.use(`/api/v1/auth`, authRouter)
app.use(`/api/v1/todos`, todoRouter)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()