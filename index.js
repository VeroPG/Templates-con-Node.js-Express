const express = require('express');
const app = express()
const port=3000


app.use(express.static("public"))

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/home', function(req, res){
    res.render("home");
});

app.get('/about', function(req, res){
    res.render("about");
});

app.get('/location', function(req, res){
    res.render("location");
});
 
app.get('/mission', function(req, res){
    res.render("mission");
});

app.get('/contact', function(req, res){
    res.render("contact");
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});
