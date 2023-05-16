const Programas=require("../models/programa.model");

 function createProgramas(req,res){
    const programas=new Programas(req.body);
   
    programas.save((error, programaStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(programaStored)
        }
    })
}

function getProgramas(req,res){
    Programas.find((error, programasStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(programasStored)
        }
    })
}

 function deletePrograma(req,res){
    const {id}=req.params;

    Programas.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el dato"})
        }else{
            res.status(200).send({msg: "Persona eliminado"})
        }
    })
}

function updateProgramas(req,res){
   const {id}=req.params;
   const datosPrograma=req.body;

   Programas.findByIdAndUpdate({_id:id},datosPrograma, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}


module.exports={
    createProgramas,
    getProgramas,
    deletePrograma,
    updateProgramas
}