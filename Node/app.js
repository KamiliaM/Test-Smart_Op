const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
//import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);





// //middlewares
// app.use('/posts', () => {
//     console.log('this is a midlleware running')
// })




//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});




//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB!'));





//how to we start listenning to the server

app.listen(9089);