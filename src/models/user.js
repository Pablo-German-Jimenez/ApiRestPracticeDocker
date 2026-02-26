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
            unique:true,
            validate:{
                validator:(value)=>{
                    return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(value);
            }
        }
       },
       password:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(value);
            }
        }
       }
    },
{timeStamps:true});

const Usuario = mongoose.model('Usuario',userSchema);

export default Usuario;