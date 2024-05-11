const express = require("express");
const { Kategorija } = require("../models");
const route = express.Router();
const Joi = require("joi");

route.use(express.json());
route.use(express.urlencoded({extended:true}));

const schema = Joi.object({
     naziv: Joi.string().min(3).max(10).pattern(/^[A-Z][a-zA-Z\s]*$/).required().messages({
     'string.pattern.base': 'Ime mora da bude samo od slova abecede i da pocinje velikim slovom',
     'string.min': 'Ime sme da ima najmanje {{#limit}} slova',
     'string.max': 'Ime sme da ima najvise {{#limit}} slova',
     }),

});



route.get("/", async (req, res) => {
     try {
          const kategorija = await Kategorija.findAll();
          return res.json(kategorija);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Greska", data : err});
    }
});

route.get("/:id", async (req, res) => {
     try {
          const kategorija = await Kategorija.findByPk(req.params.id);
         return res.json(kategorija);
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
           const novi = await Kategorija.create(req.body);
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
 
 
 route.put("/:id", async (req, res) => {
      try {
           
            const validationResult = schema.validate(req.body, { abortEarly: false });
             if (validationResult.error) {
            return res.status(400).json({ error: "Validation error", details: validationResult.error.details });
        }
           const kategorija = await Kategorija.findByPk(req.params.id);
           kategorija.naziv = req.body.naziv;
           kategorija.save();
           return res.json(kategorija);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
      try {
           const kategorija = await Kategorija.findByPk(req.params.id);
           kategorija.destroy();
           return res.json(kategorija.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 module.exports = route;