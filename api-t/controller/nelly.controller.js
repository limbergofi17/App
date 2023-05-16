const Nellys=require("../models/nelly.model");

 function createNellys(req,res){
    const nellys=new Nellys(req.body);
   
    nellys.save((error, nellyStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(nellyStored)
        }
    })
}

function getNellys(req,res){
    Nellys.find((error, nellysStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(nellysStored)
        }
    })
}

 function deleteNelly(req,res){
    const {id}=req.params;

    Nellys.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el dato"})
        }else{
            res.status(200).send({msg: "Persona eliminado"})
        }
    })
}

function updateNellys(req,res){
   const {id}=req.params;
   const datosNelly=req.body;

   Nellys.findByIdAndUpdate({_id:id},datosNelly, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}


module.exports={
    createNellys,
    getNellys,
    deleteNelly,
    updateNellys
}