const express = require("express");
const { sequelize, Palacinka } = require("./models")
const cors = require("cors");
const app = express();
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(express.json());
const corsOptions = {
  origin: ['http://localhost:8000','http://localhost:8080','http://127.0.0.1:8000']
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, './static')));

function authToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
 if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }

    req.user = user;
    next();
  });
}



app.use(authToken);

app.put("/promeni-cenu/:id", async (req, res) => {
    try {
        const palacinka = await Palacinka.findByPk(req.params.id);      
        console.log(req.body.cena);
        palacinka.cena = req.body.cena;
        palacinka.save();
        return res.json(palacinka);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});

app.post("/prijavi-promenu", async (req, res) => {
    try {
   
        res.status(200).send({ message: "Success!" });
    } catch (error) {
    
        console.error("Error processing PUT request:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }

});


app.get("/palacinke", async (req, res) => {
    
    try {
        const palacinka = await Palacinka.findAll();
        console.log(palacinka);
        return res.json(palacinka);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});


app.get("/palacinke/:id", async (req, res) => {
    
    try {
        const palacinka = await Palacinka.findByPk(req.params.id);
        return res.json(palacinka);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Greska", data: err });
    }
});



app.get('/',(req, res)=> {
    res.send('Hello from REST API service');
});

const palacinkaRoutes = require("./routes/palacinka.js");
app.use("/palacinka", palacinkaRoutes);

const kategorijaRoutes = require("./routes/kategorija.js");
app.use("/kategorija", kategorijaRoutes);

const narudzbinaRoutes = require("./routes/narudzbina.js");
app.use("/narudzbina", narudzbinaRoutes);

const sastojakRoutes = require("./routes/sastojak.js");
app.use("/sastojak", sastojakRoutes);

const palacinkaSastojakRoutes = require("./routes/palacinka-sastojak.js");
app.use("/palacinka-sastojak", palacinkaSastojakRoutes);

const stavkaNarudzbineRoutes = require("./routes/stavka-narudzbine.js");
app.use("/stavka-narudzbine", stavkaNarudzbineRoutes);




app.listen({ port: 9000 }, async () => {
    console.log("Started server on localhost:9000");
    await sequelize.sync();
    console.log("DB synced");
});

