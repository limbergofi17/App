const express=require("express");
const PersonaController= require("../controller/persona.controller");

const api=express.Router();

api.post("/guardarPersona",PersonaController.createPersonas);
api.get("/personas",PersonaController.getPersonas);
api.get("/unaPersona/:id",PersonaController.getUnaPersona);
api.delete("/persona/:id",PersonaController.deletePersona);
api.put("/unPersonas",PersonaController.updatePersonas);



module.exports=api;