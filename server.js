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

// LESSONS
app.get("/explore", (req, res)=> {
    res.render("explore", {
        title: "Explore", 
    })
}); 


const PORT = 3000; 

app.listen(PORT,()=>{
    console.log(`Web Server is up and running, port ${PORT}`);    
});