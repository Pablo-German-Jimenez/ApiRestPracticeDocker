import mongoose from "mongoose";

try{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.info(`Conectado a apiRestDocker`)
    })
}
catch(err){
    console.error(err)
}

export default mongoose
