import { Router } from "express";


const router = Router()


router.route('/').get((req,res)=>{
    console.log('Desde tasks.routes.js!')
    res.send('Hola Jozú!')
})


export default router