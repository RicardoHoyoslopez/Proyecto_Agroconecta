import api from "../api/axios";

export const loginUsuario = async (datos) => {
    return await api.post("/login", datos);
};

export const registrarUsuario = async (datos) => {
    return await api.post("/registro", datos);
};