//requiring express package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//execute express
const app = express();


//import routes
const postsRoute = require('./routes/posts');


//MIDDLEWARES- function that runs everytime we hit a route/all routes
app.use(bodyParser.json());


//ROUTES
app.use('/posts', postsRoute);


app.get('/', (req,res) => {
    res.send("We are on HOME route");
});


//connect to db
mongoose.connect('mongodb+srv://dbanirudh:IndeHN3HFmYO3NMA@cluster0.abbyf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', ()=>{
    console.log("db connected");
});




const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})