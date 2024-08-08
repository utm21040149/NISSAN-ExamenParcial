import { BecariosExa} from "../Models/becarios.model.js";

const test = ()=>{
    console.log('Se mando a llamar a Becarios')
}

BecariosExa.create({
    name:"Fernando",
    lastName: "Romo",
    age: 21,
    adress: "Av. El charco de lodo",
    tiempoAqui: 13
})

export default test;