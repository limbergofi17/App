const Cortes=require("../models/corte.model");

 function createCortes(req,res){
    const cortes=new Cortes(req.body);
   
    cortes.save((error, corteStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(corteStored)
        }
    })
}

function getCortes(req,res){
    Cortes.find((error, cortesStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(cortesStored)
        }
    })
}

 function deleteCorte(req,res){
    const {id}=req.params;

    Cortes.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el dato"})
        }else{
            res.status(200).send({msg: "Persona eliminado"})
        }
    })
}

function updateCortes(req,res){
   const {id}=req.params;
   const datosCorte=req.body;

   Cortes.findByIdAndUpdate({_id:id},datosCorte, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}


module.exports={
    createCortes,
    getCortes,
    deleteCorte,
    updateCortes
}