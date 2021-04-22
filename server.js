const express = require("express"); 
const exphbs = require('express-handlebars'); 

const app = express(); 

app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars'); 

app.use(express.static("public")); 

// HOME 
app.get("/", (req, res)=> {
    res.render("index", {
        title: "Home", 
    })
}); 

// PRACTICE
app.get("/practice", (req, res)=> {
    res.render("practice", {
        title: "Practice", 
    })
}); 

// EXPLORE
app.get("/explore", (req, res)=> {
    res.render("explore", {
        title: "Explore", 
    })
}); 

// LESSON
app.get("/lesson", (req, res)=> {
    res.render("lesson", {
        title: "Lesson", 
    })
}); 

// REVIEW
app.get("/review", (req, res)=> {
    res.render("review", {
        title: "Review", 
    })
}); 

const PORT = process.env.PORT; 

app.listen(PORT,()=>{
    console.log(`Web Server is up and running, port ${PORT}`);    
});