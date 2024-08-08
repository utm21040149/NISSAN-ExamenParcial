import {Schema, model} from 'mongoose'

export const esquemaEntrenador = new Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    sex:{
        type:String
    },
    titulo:{
        type:Boolean
    }
})

export const EntrenadoresExa = new model ('Entrenadores', esquema)