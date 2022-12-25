const express = require('express')
const app = express();
const routes = require('./routes')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const connectDb = require('./db/connect')


// parse form data
app.use(express.urlencoded({ extended: false }))

app.use(express.static('./public'));
// parse json
app.use(express.json())

app.get('/', (req, res) => {
   res.send("working........") 
});

app.use('/api/v1', routes)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

const start = async() => {
   try {
      await connectDb(process.env.MONGODB_URL)
      app.listen(port, () => console.log(`App listing on port: ${port}...`));
   } catch (error) {
      console.log(error);
   }
}

start()
