import { genSaltSync } from "bcrypt";
import Users from "../models/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const salts = genSaltSync(10);
    const userHashed = bcrypt.hashSync(req.body.password, salts);
    req.body.password = userHashed;
    const userCreate = new Users(req.body);
    await userCreate.save();
    res.send({ message: "Usuario creado correctamente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const listarUsers = async (req, res) => {
  try {
    const uses = await Users.find();
    res.status(200).json(uses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuarioBuscado = await Users.findOne({ email });

    if (!usuarioBuscado)
      return res.status(404).json({ message: "Usuario no encontrado" });
    const passwordValido = bcrypt.compareSync(
      password,
      usuarioBuscado.password,
    );
    if (!passwordValido)
      return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = generarJWT(usuarioBuscado.name, usuarioBuscado.email);

    res.status(200).json({ message: "Usuario logueado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
