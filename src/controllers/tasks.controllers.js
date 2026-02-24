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
       res.status(201).json({message:'task created'})
      
    }catch(error){
        console.error(error)
         res.send(500).json({message:`ocurrio un error al crear la task`})
    }
}


export const eliminarTarea = async (req, res) => {
    try {
        // Obtenemos el id desde los parámetros de la URL
        const { id } = req.params;

        // Buscamos y eliminamos
        const tareaEliminada = await fotos.findByIdAndDelete(id);

        if (!tareaEliminada) {
            return res.status(404).json({ message: 'No se encontró la tarea con ese ID' });
        }

        res.status(200).json({ message: 'Tarea eliminada correctamente', tareaEliminada });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocurrió un error al eliminar la tarea' });
    }
}