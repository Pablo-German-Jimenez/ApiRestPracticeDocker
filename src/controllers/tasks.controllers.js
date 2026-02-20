import { json } from "express"
import fotos from "../models/task.js"

export const obtener = (req,res)=>{
    console.log('Desde tasks.routes.js!')
    res.send('Desde controlador obtener!')
}

export const createTask =async(req,res)=>{
    try{
       res.json({message:`desde el try de createTask controlador`})
       
       const taskCreated = new fotos(req.body)
       await taskCreated.save()
       res.status(201).json({message:'task cread'})
      
    }catch(error){
        console.error(error)
         res.send(500).json({message:`ocurrio un error al crear la task`})
    }
}