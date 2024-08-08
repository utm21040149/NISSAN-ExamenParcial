import {Schema, model} from 'mongoose'

export const esquemaBeca = new Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    adress:{
        type:String
    },
    tiempoAqui:{
        type:String
    }
})

export const BecariosExa = new model ('Becarios', esquema)