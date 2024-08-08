import { EmpreInterExa } from "../Models/empresasInternacionales.model.js";

const test = ()=>{
    console.log('Se mando a llamar a Empresas Internacionales')
}

EmpreInterExa.create({
    nameEmpre:"OMEN",
    Boss: "Luis Fernando Ruelas Romo",
    adress: "Av. Tecnologico",
    Fundada: 4491234567,
    asociadas: true
})

export default test;