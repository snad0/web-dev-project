const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port=8000;

// app.use(express.static('static',options))
app.use('/static',express.static('static'))

app.use(express.urlencoded())


app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/', (req, res)=>{
    const params={}
    res.status(200).render("index.pug",params);
});
app.get('/product', (req, res)=>{
    const params={}
    res.status(200).render("products.pug",params);
});
app.get('/productdetails', (req, res)=>{
    const params={}
    res.status(200).render("productdetails.pug",params);
});

app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`);
});
