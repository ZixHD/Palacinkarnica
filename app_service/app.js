const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();
const cors = require('cors');



const BP = require('body-parser');
const Joi = require('joi');
const fs = require('fs');


app.use(cors());
app.use(express.static(path.join(__dirname, './static')));

app.use('/nova-palacinka', BP.urlencoded({ extended: false }));

function getCookies(req) {
    if (req.headers.cookie == null) return {};


    const rawCookies = req.headers.cookie.split('; ');
    const parsedCookies = {};


    rawCookies.forEach( rawCookie => {
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });


    return parsedCookies;
};

function authToken(req, res, next) {
    const cookies = getCookies(req);
    const token = cookies['token'];
    if (token== null) return res.redirect(301, '/login') ;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.redirect(301, '/login') ;
        req.user = user;
        next();
    });
    
}


app.get('/user', (req, res) => {
  res.redirect('http://127.0.0.1:8080/');
});
app.get('/admin/register', (req, res) => {
  res.sendFile('register.html', { root: './static/admin' });
});

app.get('/admin/login', (req, res) => {
  res.sendFile('login.html', { root: './static/admin' });
});

app.get('/admin/index', authToken, (req, res) => {
  res.sendFile('index.html', { root: './static/admin' })
});

app.get("/palacinke", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/admin/palacinke.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/admin/index.html"));
});

app.get("/kategorije", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/admin/kategorije.html"));
});

app.get("/narudzbine", (req, res) => {
  res.sendFile(path.join(__dirname, "./static/admin/narudzbine.html"));
});


app.listen(8000);