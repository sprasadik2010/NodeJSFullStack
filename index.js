var express = require('express');
var app = express();

app.set('views', __dirname + '/views/pages');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index.ejs', {
        title: 'Home Page',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
  });
});

app.get('/home', function(req, res){
  res.render('index.ejs', {
    title: 'Home Page',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
});
});

app.get('/index', function(req, res){
  res.render('index.ejs', {
    title: 'Home Page',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
});
});

app.get('/about', function(req, res){
  res.render('about.ejs', {
    title: 'About',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
  });
});

app.get('/blog', function(req, res){
  res.render('blog.ejs', {
    title: 'Blog',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
  });
});

app.get('/features', function(req, res){
  res.render('Features.ejs', {
    title: 'Features',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
  });
});

app.get('/contact', function(req, res){
  res.render('contact.ejs', {
    title: 'Contact',
    nav: ['Home','About','Blog','Features','','Contact Us'] 
  });
});
var server = app.listen(2010,()=>{})
