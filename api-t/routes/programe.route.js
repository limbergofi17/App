const express=require("express");
const ProgrameController= require("../controller/programe.controller");

const api=express.Router();

api.post("/programe",ProgrameController.createProgrames);
api.get("/programes",ProgrameController.getProgrames);
api.delete("/programe/:id",ProgrameController.deletePrograme);
api.patch("/programe/:id",ProgrameController.updateProgrames);



module.exports=api;