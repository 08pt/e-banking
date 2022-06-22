
// server.js
const express = require("express");

// const connectDB = require("./config/db"); //added

const app = express();

// connect database
// connectDB();//added

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("<h1>Server is  running</h1>"));

// setting up port

app.listen(3000,() => console.log('Express Server Started at Port: 3000'));