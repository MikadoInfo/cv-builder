const mongoose = require("mongoose")

// connect to mongodb via url
const connectDB = url => {
  return mongoose.connect(url)
}

module.exports = connectDB
