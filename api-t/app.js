const express = require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const {
    API_VERSION
}=require("./constants");


const app=express();

//importaciones de las rutas de la aplicacion
const alumnoRoutes=require("./routes/alumnos.routes");
const personaRoutes=require("./routes/personas.route");
const programaRoutes=require("./routes/programa.route");
const programeRoutes=require("./routes/programe.route");
const corteRoutes=require("./routes/corte.route");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


//Configuración de las rutas
app.use(`/api/${API_VERSION}`, alumnoRoutes);
app.use(`/api/${API_VERSION}`, personaRoutes);
app.use(`/api/${API_VERSION}`, programaRoutes);
app.use(`/api/${API_VERSION}`, programeRoutes);
app.use(`/api/${API_VERSION}`, corteRoutes);

module.exports=app;



