const Alumnos=require("../models/alumnos.model");

 function createAlumnos(req,res){
    const alumnos=new Alumnos(req.body);
   
    alumnos.save((error, alumnoStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(alumnoStored)
        }
    })
}

function getAlumnos(req,res){
    Alumnos.find((error, alumnosStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(alumnosStored)
        }
    })
}

 function deleteAlumno(req,res){
    const {id}=req.params;

    Alumnos.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el alumno"})
        }else{
            res.status(200).send({msg: "Alumno eliminado"})
        }
    })
}

function updateAlumnos(req,res){
   const {id}=req.params;
   const datosAlumno=req.body;

   Alumnos.findByIdAndUpdate({_id:id},datosAlumno, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })
}

async function getAlumno(req,res){
    console.log("Obtener los alumnos");
}



module.exports={
    createAlumnos,
    updateAlumnos,
    deleteAlumno,
    getAlumno,
    getAlumnos
}