const mongoose=require("mongoose");


const Programes=mongoose.Schema({
    nombre: String,
    apellidos: String,
    sexo: String,
    telefono: Number,
    created_at:Date
})

module.exports=mongoose.model("Programes", Programes);