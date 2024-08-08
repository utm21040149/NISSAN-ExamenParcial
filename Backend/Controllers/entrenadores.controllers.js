import { EntrenadoresExa } from "../Models/entrenadores.model.js";

const test = ()=>{
    console.log('Se mando a llamar a Entrenadores')
}

EntrenadoresExa.create({
    name:"Andrea",
    lastName: "Gutierrez",
    age: 28,
    sex: "F"
})

export default test;