import { EmpleadosExa } from "../Models/empleados.model";

const test = ()=>{
    console.log('Se mando a llamar a Empleados')
}

EmpleadosExa.create({
    name:"Jose",
    lastName: "Hernandez",
    adress: "Av. El culiacan chi cheñor",
    age: 44,
    tiempoAqui: 300
})

export default test;