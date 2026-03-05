import jwt from 'jsonwebtoken';

const generarJWT =(name,email)=>{
    try{
        const payload = {name,email};
        const token = jwt.sign(payload, process.env.SECRETJWT,{expiresIn:'1h'});
        return token;
    }catch(error){
        console.error(error)
        throw new Error('Error al generar el token')
    }

}
export default generarJWT;