// ESTE ARCHIVO SIRVE PARA GUARDAR EL ESQUEMA DE LAS NOTAS DE LA BASE DE DATOS

const { Schema, model } = require("mongoose"); // "SCHEMA" NOS PERMITE DEFINAR UN ESQUEMA O QUE VAMOS A GUARDAR EN NUESTRA BD. "MODEL" A PARTIR DE UN ESQUEMA NOS PERMITE CREAR UNA CLASE. AMBOS NOS PERMITEN DEFINIR UN MODELO DE BASE DE DATOS

const NoteSchema =new Schema ({
    tittle: {
        type: String,  //DECLARAMOS EL TIPO DE DATOS PARA EL MODELO 
        required: true  //DECLARAMOS QUE ESTE MODELO ES NECESARIO PARA LA BASE DE DATOS
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
    }
}, {
    timestamps:true  // ESTA PROPIEDAD HARA QUE SE AGREGUE, POR DEFECTO, QUIEN Y CUANDO CREO EL DATO
})

module.exports = model("Note", NoteSchema);