import {Schema, model} from 'mongoose'

export const esquemaEmpreLocal = new Schema({
    nameEmpre:{
        type:String
    },
    Encargado:{
        type:String
    },
    adress:{
        type:String
    },
    numberPhone:{
        type:Number
    },
    Fundada:{
        type:String
    },
    activa:{
        type:Boolean
    }
})

export const EmpreLocalExa = new model ('Empresas Locales', esquema)