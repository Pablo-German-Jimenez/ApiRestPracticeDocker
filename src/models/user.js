import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
       },
       email:
        {
            type:String,
            required:true,
            unique:true
                 
       },
       password:{
        type:String,
        required:true,
        minlength:6 ['la clave es demasiada cortita che'],
        maxlength:10['te copaste escribiendo rey de reyes xD']
        }

       },
    
{timeStamps:true});

userSchema.methods.toJSON=function(){
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
}
const Usuario = mongoose.model('Usuario',userSchema);

export default Usuario;