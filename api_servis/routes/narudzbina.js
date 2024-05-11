const express = require("express");
const { Narudzbina } = require("../models");
const route = express.Router();
const Joi = require("joi");

route.use(express.json());
route.use(express.urlencoded({extended:true}));

const schema = Joi.object({
    id: Joi.number().integer().required(),
    vreme_narucivanja: Joi.date().required(),
    zakazano_vreme: Joi.date().required(),
    status: Joi.string().required(),
    adresa: Joi.string().regex(/^[A-Za-z\s]+ \d+$/).required().messages({
      'string.pattern.base': 'Adresa mora sadržavati naziv ulice i broj.',
      'any.required': 'Adresa je obavezno polje.',
    }),
     telefon: Joi.string()
    .regex(/^(\+381|06)\d{8,10}$/) // Allows either +381 or 06 followed by 8 to 10 digits
    .required()
    .messages({
      'string.pattern.base': 'Telefon mora početi sa +381 ili 06 i sadržavati 8 do 10 brojeva.',
      'any.required': 'Telefon je obavezno polje.',
    }),
     user_id: Joi.number().integer().required(),
  ime_prezime: Joi.string()
    .regex(/^[A-Z][a-z]*\s[A-Z][a-z]*$/) // First and last name, each starting with an uppercase letter
    .required()
    .messages({
      'string.pattern.base': 'Ime i prezime moraju početi velikim slovima i sadržavati samo slova.',
      'any.required': 'Ime i prezime su obavezna polja.',
    }),
});

route.get("/", async (req, res) => {
     try {
          const narudzbina = await Narudzbina.findAll();
          return res.json(narudzbina);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Greska", data : err});
    }
});

route.get("/:id", async (req, res) => {
     try {
          const narudzbina = await Narudzbina.findByPk(req.params.id);
         return res.json(narudzbina);
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
           const novi = await Narudzbina.create(req.body);
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
          const narudzbina = await Narudzbina.findByPk(req.params.id);
          narudzbina.vreme_narucivanja = req.body.vreme_narucivanja;
          narudzbina.zakazano_vreme = req.body.zakazano_vreme;
          narudzbina.status = req.body.status;
          narudzbina.adresa = req.body.adresa;
          narudzbina.telefon = req.body.telefon;
          narudzbina.ime_prezime = req.body.ime_prezime;
          narudzbina.save();
          return res.json(narudzbina);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
      try {
           const narudzbina = await Narudzbina.findByPk(req.params.id);
           narudzbina.destroy();
           return res.json(narudzbina.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 module.exports = route;