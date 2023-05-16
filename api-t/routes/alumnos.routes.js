const express=require("express");
const AlumnosController= require("../controller/alumnos.controller");

const api=express.Router();

api.post("/alumno",AlumnosController.createAlumnos);
api.get("/alumnos",AlumnosController.getAlumnos);
api.delete("/alumno/:id",AlumnosController.deleteAlumno);
api.patch("/alumno/:id",AlumnosController.updateAlumnos);
api.get("/alumno/:id",AlumnosController.getAlumno);


module.exports=api;