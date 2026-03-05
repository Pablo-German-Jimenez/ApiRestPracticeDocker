import jwt from 'jsonwebtoken';

const verificarJWT = (req,res,next)=>{
    try{
        const token = req.header['token'];
        if(!token){return res.status(401).json({message:'error desde validarToken , No hay token !'}) }
        const payload = jwt.verify(token, process.env.SECRETJWT)
        req.usuario = payload;
        next();


    }catch(error){
        console.error(error)
        res.status(401).json({message:'Token no válido'})
    }
}

export default verificarJWT;