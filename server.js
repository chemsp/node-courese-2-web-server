const express = require('express');
const hbs = require('hbs');
console.log('Helllo World')

var app = express();
app.set({'view engine':'hbs'})
hbs.registerPartials(__dirname +'/views/partials');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('screamIt', (text)=>{
    var mess = text;
    debugger;
    return mess.toUpperCase();
})

hbs.registerHelper('welcomeMssge', ()=>{
  
    return 'Hi, Welcome to my Page';
})

app.get('/',(req,res)=>{
 res.send({'Name':"New App"});

});
app.get('/about',(req,res) => {
    res.render('about.hbs',{'title':'New App'});
});
app.get('/home',(req,res) => {
    res.render('home.hbs',{'mssg':'Hi, Welcome to my Page'});
});
app.listen(3000);