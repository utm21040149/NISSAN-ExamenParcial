import { EmpreLocalExa } from "../Models/empresasLocales.model.js";

const test = ()=>{
    console.log('Se mando a llamar a Empresas Locales')
}

EmpreLocalExa.create({
    nameEmpre:"NISSAN 4",
    Encargado: "Jose Luis Ruelas Collazo",
    adress: "Av. Lopez Mateos",
    numberPhone: 2003,
    activa: true
})

export default test;