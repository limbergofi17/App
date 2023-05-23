const mongoose=require("mongoose");


const Personas=mongoose.Schema({
    curp:{
        type:String,
        
    },
    nombre: {type:String},
    apellidos: {type:String},
    fechana: {type:Date},
    sexo: {type:String},
    telefono: {type:Number},
    email:{type:String},
    created_at:Date
})

module.exports=mongoose.model("Personas", Personas);