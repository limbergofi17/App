const express=require("express");
const ProgrameController= require("../controller/programe.controller");

const api=express.Router();

api.post("/programe",ProgrameController.createProgrames);
api.get("/programes",ProgrameController.getProgrames);
api.get("/unProgrames/:id",ProgrameController.getUnProgrames);
api.delete("/programe/:id",ProgrameController.deletePrograme);
api.put("/programe/:id",ProgrameController.updateProgrames);



module.exports=api;