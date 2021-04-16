const express = require("express"); 
const exphbs = require('express-handlebars'); 

const lessons = require("./models/lessons"); 
const { getAllLessons } = require("./models/lessons"); 

const app = express(); 

app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars'); 

app.use(express.static("public")); 

// HOME 
app.get("/", (req, res)=> {
    res.render("index", {
        title: "Home", 
        // data: lessons.getAllLessons()
    })
}); 

// PRACTICE
app.get("/practice", (req, res)=> {
    res.render("practice", {
        title: "Practice", 
        // data: lessons.getAllLessons()
    })
}); 

// LESSONS
app.get("/lessons", (req, res)=> {
    res.render("lessons", {
        title: "Lessons", 
        // data: lessons.getAllLessons()
    })
}); 

const PORT = 3000; 

app.listen(PORT,()=>{
    console.log(`Web Server is up and running, port ${PORT}`);    
});