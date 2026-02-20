export const obtener = (req,res)=>{
    console.log('Desde tasks.routes.js!')
    res.send('Desde controlador obtener!')
}

export const createTask = (req,res)=>{
    res.send(`desde createTaks`)
}