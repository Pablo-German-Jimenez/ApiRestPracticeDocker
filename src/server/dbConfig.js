import mongoose from "mongoose";

try{
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info(`Conectado a apiRestDocker`)
    })
}
catch(err){
    console.error(err)
}

export default mongoose
