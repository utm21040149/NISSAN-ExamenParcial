import {Schema, model} from 'mongoose'

export const esquemaEmpreInter = new Schema({
    nameEmpre:{
        type:String
    },
    Boss:{
        type:String
    },
    adress:{
        type:String
    },
    numberPhone:{
        type:Number
    },
    tiempoAqui:{
        type:String
    },
    asociadas:{
        type:Boolean
    }
})

export const EmpreInterExa = new model ('Empresa Internacional', esquema)