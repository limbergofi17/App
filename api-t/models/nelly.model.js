const mongoose=require("mongoose");


const Nellys=mongoose.Schema({

    nombre: String,
    descripcion: String,
    precio: String,
    created_at:Date
})

module.exports=mongoose.model("Nellys", Nellys);