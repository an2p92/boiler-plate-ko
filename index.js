const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://an2p92:123@boilerplate.dsxjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser: true, 
    // useUnifiedToplogy: true, 
    // useCreateIndex: true, 
    // useFindAnmodify: false
}).then(() => console.log('MongoDB Connected..dd.'))
 .catch(err => console.log(err))

app.get('/', (req, res) => {res.send('Hello World!~~~~~~안녕하세요')})

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})