import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import exaTestBecarios from './Backend/Controllers/becarios.controllers.js';
import exaTestEmpleados from './Backend/Controllers/empleados.controllers.js';
import exaTestEntrendaores from './Backend/Controllers/entrenadores.controllers.js';
import exaTestLideres from './Backend/Controllers/lideres.controllers.js';
import exaTestNomina from './Backend/Controllers/nomina.controllers.js';
import exaTestTecnicos from './Backend/Controllers/tecnicos.controllers.js';
import exaTestEmpreInternacio from './Backend/Controllers/empresasInternacionales.controllers.js'
import exaTestEmpreLocal from './Backend/Controllers/empresasLocales.controllers.js';

dotenv.config();


mongoose.connect(process.env.url)
.then (()=> {
    console.log("Si Funciona Teacher pongame 10 pls")
})
.catch((err)=>{
    console.log("No funciono pero el intento quedo grabado por los siglos de los siglos")
})


const app = express();
app.use (cors());



app.listen(4005,()=>{
    console.log ('Correcta funcionalidad del Servidor')
})



exaTestBecarios()
exaTestEmpleados()
exaTestEntrendaores()
exaTestLideres()
exaTestNomina()
exaTestTecnicos()
exaTestEmpreInternacio()
exaTestEmpreLocal()