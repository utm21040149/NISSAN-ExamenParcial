import { TecnicosExa } from "../Models/tecnicos.model.js";

const test = ()=>{
    console.log('Se mando a llamar a Tecnicos')
}

TecnicosExa.create({
    name:"Roberto",
    lastName: "Jimenez",
    age: 25,
    sex: "M",
    titulo: true
})

export default test;