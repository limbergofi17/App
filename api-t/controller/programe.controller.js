const Programes=require("../models/programe.model");

 function createProgrames(req,res){
    const programes=new Programes(req.body);
   
    programes.save((error, programeStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(programeStored)
        }
    })
}

function getProgrames(req,res){
    Programes.find((error, programesStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(programesStored)
        }
    })
}

function getUnProgrames(req,res){
    const programeId = req.params.id;

    Programes.findById(programeId, (error, programesStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(programesStored)
        }
    });
}

 function deletePrograme(req,res){
    const {id}=req.params;

    Programes.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el dato"})
        }else{
            res.status(200).send({msg: "Persona eliminado"})
        }
    })
}

function updateProgrames(req,res){
   const {id}=req.params;
   const datosPrograme=req.body;

   Programes.findByIdAndUpdate({_id:id},datosPrograme, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}


module.exports={
    createProgrames,
    getUnProgrames,
    getProgrames,
    deletePrograme,
    updateProgrames
}