const { model } = require("mongoose");
const Personas=require("../models/persona.model");

 function createPersonas(req,res){
    const personas=new Personas(req.body);
   
    personas.save((error, personaStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(personaStored)
        }
    })
}

function getPersonas(req,res){
    Personas.find((error, personasStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(personasStored)
        }
    })
}

function getUnaPersona(req, res) {
    const personaId = req.params.id; // Obtén el ID de la persona de la solicitud

    Personas.findById(personaId, (error, persona) => {
        if (error) {
            res.status(500).send({ msg: "No se pudo encontrar la persona" });
        } else {
            if (persona) {
                res.status(200).send(persona);
            } else {
                res.status(404).send({ msg: "La persona no existe" });
            }
        }
    });
}

 function deletePersona(req,res){
    const {id}=req.params;

    Personas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el dato"})
        }else{
            res.status(200).send({msg: "Persona eliminado"})
        }
    })
}


function updatePersonas(req,res){
   const {id}=req.params;
   const datosPersona=req.body;

   Personas.findByIdAndUpdate({_id:id},datosPersona, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}


module.exports={
    createPersonas,
    getPersonas,
    getUnaPersona,
    deletePersona,
    updatePersonas
}