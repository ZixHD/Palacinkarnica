const express = require("express");
const { StavkaNarudzbine, Sequelize } = require("../models");
const route = express.Router();


route.use(express.json());
route.use(express.urlencoded({extended:true}));



route.get("/", async (req, res) => {
     try {
          const stavka = await StavkaNarudzbine.findAll();
          return res.json(stavka);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Greska", data : err});
    }
});

route.get("/:id", async (req, res) => {
     try {
          const stavka = await StavkaNarudzbine.findByPk(req.params.id);
          
          return res.json(stavka);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
      try {
           
           
           const novi = await StavkaNarudzbine.create(req.body);
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
 

 
 
route.delete("/:id", async (req, res) => {
     try {
          const stavkaId = req.params.id;

          const sveKomb = await PalacinkaSastojak.findAll();
           const deletedRows = await Palacinka.destroy({
      where: {
        palacinka_id: palacinkaId,
      },
    });
         
     } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
});
 
 module.exports = route;