const express=require("express");
const ProgramaController= require("../controller/programa.controller");

const api=express.Router();

api.post("/programa",ProgramaController.createProgramas);
api.get("/programas",ProgramaController.getProgramas);
api.delete("/programa/:id",ProgramaController.deletePrograma);
api.patch("/programa/:id",ProgramaController.updateProgramas);



module.exports=api;