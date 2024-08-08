import {Schema, model} from 'mongoose'

export const esquemaNomina = new Schema({
    salario:{
        type:String
    },
    fechaSalarial:{
        type:String
    }
})

export const NominaExa = new model ('Nomina', esquema)