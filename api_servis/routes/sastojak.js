const express = require("express");
const { Sastojak } = require("../models");
const route = express.Router();
const Joi = require("joi");


route.use(express.json());
route.use(express.urlencoded({extended:true}));

const schema = Joi.object({
     naziv: Joi.string().min(2) .pattern(/^[A-Z][a-zA-Z\s]*$/).required().messages({
     'string.pattern.base':'Ime mora da bude samo od slova abecede i da pocinje velikim slovom',
     'string.min': 'Ime sme da ima najmanje {{#limit}} slova',
    }),
});

route.get("/", async (req, res) => {
     try {
          const sastojak = await Sastojak.findAll();
          return res.json(sastojak);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Greska", data : err});
    }
});

route.get("/:id", async (req, res) => {
     try {
          const sastojak = await Sastojak.findByPk(req.params.id);
         return res.json(sastojak);
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
           const novi = await Sastojak.create(req.body);
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
           const sastojak = await Sastojak.findByPk(req.params.id);
           sastojak.naziv = req.body.naziv;
           sastojak.save();
           return res.json(sastojak);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
      try {
           const sastojak = await Sastojak.findByPk(req.params.id);
           sastojak.destroy();
           return res.json(sastojak.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 module.exports = route;