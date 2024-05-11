const express = require("express");
const { Palacinka, PalacinkaSastojak, Sequelize } = require("../models");
const route = express.Router();


route.use(express.json());
route.use(express.urlencoded({extended:true}));



route.get("/", async (req, res) => {
     try {
          const palacinka = await PalacinkaSastojak.findAll();
          return res.json(palacinka);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Greska", data : err});
    }
});

route.get("/:id", async (req, res) => {
     try {
          const palacinka = await PalacinkaSastojak.findByPk(req.params.id);
          
          return res.json(palacinka);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
      try {
    const { palacinka_id, sastojak_ids } = req.body;

    // Filter out null or undefined values from sastojak_ids
    const filteredSastojakIds = sastojak_ids.filter(id => id !== null && id !== undefined);

    // Create an array of objects where each object has the same palacinka_id
    const newData = filteredSastojakIds.map(sastojak_id => ({
      palacinka_id,
      sastojak_id
    }));

    // Insert the array of objects into the database
   const novi = await PalacinkaSastojak.bulkCreate(newData).catch(error => {
  console.error("Database Error:", error);
  throw error; // Re-throw the error to propagate it to the catch block below
});

    // Log the inserted data
    console.log(novi);

    res.json(novi);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Greska", data: err });
  }
 });
 

 
 
route.delete("/:id", async (req, res) => {
     try {
          const palacinkaId = req.params.id;

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