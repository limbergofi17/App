const express=require("express");
const NellysController= require("../controller/nelly.controller");

const api=express.Router();

api.post("/nelly",NellysController.createNellys);
api.get("/nellys",NellysController.getNellys);
api.delete("/nelly/:id",NellysController.deleteNelly);
api.patch("/nelly/:id",NellysController.updateNellys);



module.exports=api;