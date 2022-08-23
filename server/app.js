require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDb = require('./db/connectDB')
const postsRouter = require('./routes/posts')

const app = express()

app.use(bodyParser.json({limit: "30mb" , extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb" , extended:true}))
app.use(cors())
app.use('/posts',postsRouter)

const PORT = process.env.PORT || 5000
const start = async () => {
    await connectDb(process.env.MONGO_URI)
    try {
        app.listen(PORT, ()=>console.log(`Server is starting on Port : ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()