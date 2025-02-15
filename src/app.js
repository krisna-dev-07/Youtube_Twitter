import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// app.use when we need middleware/configure setting

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "20kb" }))             //  to handle request from form in json

app.use(express.urlencoded({ limit: "20kb" }))      //to handle the encoded url for space etc

app.use(express.static("public"))                   //to handle files and store it on local

app.use(cookieParser())                             //cookie-parser to do crud opr on client cookie

//routes import

import userRouter from './routes/user.routes.js'
import videoRouter from './routes/video.routes.js'
import likeRouter from './routes/like.routes.js'
import CommentRouter from './routes/comment.routes.js'
import TweetRouter from './routes/tweet.routes.js'

//routes declaration

app.use("/api/v1/users",userRouter)
app.use("/api/v1/videos",videoRouter)
app.use("/api/v1/likes",likeRouter)
app.use("/api/v1/comment",CommentRouter)
app.use("/api/v1/tweets",TweetRouter)

export { app }