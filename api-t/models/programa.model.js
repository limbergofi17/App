const mongoose=require("mongoose");


const Programas=mongoose.Schema({
    nombre: String,
    apellidos: String,
    sexo: String,
    telefono: Number,
    created_at:Date
})

module.exports=mongoose.model("Programas", Programas);