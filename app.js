const express = require('express')

const mongoose = require('mongoose')

const mongoString = `mongodb+srv://kenan:SONjNTsgoqEljMLY@cluster0.hbgedqq.mongodb.net/?retryWrites=true&w=majority`

const cors = require('cors')

const bodyParser = require('body-parser')

const index = require('./routes/index')

const app = express();

 

mongoose.connect(mongoString);

const database = mongoose.connection;

 

database.on('error', (error) => {

    console.log(error)

})

 

database.once('connected', () => {

    console.log('Database Connected');

})

 

app.use(cors({

    origin: ['http://localhost:3000'],

    methods: ['GET', 'POST'],

    credentials: true

}))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

 

app.use('/', index)

 

const PORT = 3001

 

const server = app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)

})