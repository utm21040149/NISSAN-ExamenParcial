import { NominaExa } from "../Models/nomina.model.js";

const test = () =>{
    console.log('Se manda a llamar a Nomina')
}

NominaExa.create({
    salario: 2500,
    fechaSalarial: "15 de cada mes"
})

export default test;