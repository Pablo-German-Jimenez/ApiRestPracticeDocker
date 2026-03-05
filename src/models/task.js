import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    taskName:{
        type: String,
        minLength: 5,
        maxLength:250,
        required:true
    },
    descriptionBrief:{
        type: String,
        minLength: 5,
        maxLength:500,
        required:true
    },
   fotos: {
    type: String,
    required: [true, 'La foto es obligatoria'],
    match:[
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$/i, 
                  'Por favor, ingresa una URL de imagen válida (jpg, jpeg, png, gif, webp o svg)'
                ]
              }
                
},{
        timestamps:true
    })

     const tasks = mongoose.model('taskSchema',taskSchema)
     export default tasks                                                                 