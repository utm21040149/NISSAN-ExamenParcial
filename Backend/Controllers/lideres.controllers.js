import { LideresExa } from "../Models/lideres.model.js";

const test = ()=>{
    console.log('Se mando a llamar a los Lideres')
}

LideresExa.create({
    name:"Maria",
    lastName: "Torres",
    age: 20,
    phoneNumber: 4491234567,
    group: "A2"
})

export default test;