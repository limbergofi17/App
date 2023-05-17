const mongoose=require("mongoose");


const Cortes=mongoose.Schema({
    nombre: String,
    apellidos: String,
    sexo: String,
    telefono: Number,
    created_at:Date
})

module.exports=mongoose.model("Cortes", Cortes);