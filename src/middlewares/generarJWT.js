import jwt from 'jsonwebtoken';

const generarJWT =(name,email)=>{
    try{
        const payload = (name,email);
        const token = jwt.sign(payload, process.env.SECREJWT,{expiresIN:'1hs'});
        return token;
    }catch(error){
        console.error(error)
        throw new Error('Error al generar el token')
    }

}