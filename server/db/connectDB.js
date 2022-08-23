const monoogse = require('mongoose')

const connectDB = (url) => {
    monoogse.connect(url)
}

module.exports = connectDB