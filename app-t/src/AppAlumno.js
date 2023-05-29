import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Rutas} from "./routes"
import toast, { Toaster } from 'react-hot-toast';


export default function AppAlumno() {
  return (
   <BrowserRouter>
    <Rutas/>
    <Toaster />
   </BrowserRouter>
  )
}
