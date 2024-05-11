const express = require("express");
const { Palacinka, Sequelize } = require("../models");
const route = express.Router();
const Joi = require("joi");


route.use(express.json());
route.use(express.urlencoded({extended:true}));


const schema = Joi.object({

     naziv: Joi.string().min(2).max(20).pattern(/^[A-Z][a-zA-Z\s]*$/).required().messages({
     'string.pattern.base':'Ime mora da bude samo od slova abecede i da pocinje velikim slovom',
     'string.min': 'Ime sme da ima najmanje {{#limit}} slova',
     'string.max': 'Ime sme da ima najvise {{#limit}} slova'
    }),
    opis: Joi.string(),
    cena: Joi.number().required(),
    kategorija_id: Joi.number().integer().required()
});

route.get("/", async (req, res) => {
     try {
          const palacinka = await Palacinka.findAll();
          return res.json(palacinka);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Greska", data : err});
    }
});

route.get("/:id", async (req, res) => {
     try {
          const palacinka = await Palacinka.findByPk(req.params.id);
          
          return res.json(palacinka);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
      try {
           const validationResult = schema.validate(req.body, { abortEarly: false });
             if (validationResult.error) {
            return res.status(400).json({ error: "Validation error", details: validationResult.error.details });
        }
           const novi = await Palacinka.create(req.body);
           return res.json(novi);
          //  const novi = {}
          //  novi.naziv = req.body.mojNaziv;
          //  novi.opis = req.body.opisKojiSeDrugacijeZove;
          //  const insertovani = await Palacinka.create(novi);
          //  return res.json(insertovani);
        
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 route.post("/nova-palacinka", async (req, res) => {
      try {
           const novi = await Palacinka.create(req.body);
           return res.json(novi);
      }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 route.put("/:id", async (req, res) => {
      try {
           
             const validationResult = schema.validate(req.body, { abortEarly: false });
             if (validationResult.error) {
            return res.status(400).json({ error: "Validation error", details: validationResult.error.details });
        }
           const palacinka = await Palacinka.findByPk(req.params.id);
           palacinka.naziv = req.body.naziv;
           palacinka.opis = req.body.opis;
           palacinka.cena = req.body.cena;
           palacinka.kategorija_id = req.body.kategorija_id;
           palacinka.save();
           return res.json(palacinka);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
      try {
           const palacinka = await Palacinka.findByPk(req.params.id);
           palacinka.destroy();
           return res.json(palacinka.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 module.exports = route;