const express = require('express');
const authRouter = require('./router/auth');
const mongoose = require("mongoose");
const helloRoute = require('./router/hello');

const app = express();
const PORT = 3000;

const DB = "mongodb+srv://ritzreigns002:kqxcsN26aFoja5kA@cluster0.mt6d5.mongodb.net/"

app.use(express.json());
app.use(helloRoute);
app.use(authRouter);

mongoose.connect(DB).then(()=>{
    console.log('mongodb connected');
}).catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

app.listen(PORT, "0.0.0.0", function(){
    console.log(`Server is running on port ${PORT}`);
});