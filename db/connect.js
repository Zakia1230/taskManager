const mongoose = require('mongoose')

const connectDb = (URI) => {
    return mongoose.connect(URI, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
}

module.exports = connectDb;
