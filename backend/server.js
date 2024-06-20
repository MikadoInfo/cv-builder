const express = require("express")
const app = express()
const resume = require("./routes/resume")
const connectDB = require("./db/connect")
require("dotenv").config()

// middleware
app.use(express.json())

// routes
app.use("/api/v1/resume", resume)

// server
const port = process.env.PORT || 3000

// connect to db and start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(
      port,
      console.log(
        `Successfully connected to DB and server is listening on port ${port}: open project on http://localhost:${port}/api/v1/resume`
      )
    )
  } catch (error) {
    console.log(error)
  }
}

// start server
start()
