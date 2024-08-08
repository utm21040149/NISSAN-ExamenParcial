import {Schema, model} from 'mongoose'

export const esquemaLideres = new Schema({
    name:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    phoneNumber:{
        type:Number
    },
    gruop:{
        type:String
    }
})

export const LideresExa = new model ('Lideres', esquema)