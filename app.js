const http = require('http');
const fs = require('fs');
const express = require('express')
const app = express();
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    const nama = "Asep Wilayana";
    const title = "Web Server EJS";

    cont = [
        {
            name: 'asep',
            email: 'asep@gmail.com'
        },
        {
            name: 'aswil',
            email: 'aswil@gmail.com'
        },
        {
            name: 'asep wilayana',
            email: 'asepwilayana@gmail.com'
        }
    ]

    res.render('index', {nama:nama, title:title, cont})
})
app.get('/contact', (req, res) =>{
    res.render('./contact')
})
app.get('/about', (req, res) =>{
    res.render('./about')
})
app.get('/product/:id', (req, res) =>{
    res.send('product id :' + req.params.id + '<br/>' + 'category id :' + req.query.category)
})
app.use('/', (req,res) => {
    res.status(404).send('page not found : 404');
})

.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})