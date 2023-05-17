const express=require("express");
const CorteController= require("../controller/corte.controller");

const api=express.Router();

api.post("/corte",CorteController.createCortes);
api.get("/cortes",CorteController.getCortes);
api.delete("/corte/:id",CorteController.deleteCorte);
api.patch("/corte/:id",CorteController.updateCortes);



module.exports=api;