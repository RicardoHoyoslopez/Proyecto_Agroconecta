import { useState } from "react";
import { Link } from "react-router-dom";
import { registrarUsuario } from "../services/authService";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLeaf
} from "react-icons/fa";

function Register() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        try {

            const response = await registrarUsuario({

                nombre_usuario: nombre,
                correo_usuario: correo,
                password_usuario: password,
                telefono_usuario: telefono,
                direccion_usuario: direccion

            });

            console.log(response.data);

            alert("Usuario registrado exitosamente");

        } catch (error) {

            console.error(error);

            alert("Error al registrar usuario");

        }

    };

    return (

        <div className="min-h-screen flex overflow-hidden">

            {/* PANEL IZQUIERDO */}
            <div className="hidden lg:flex w-[55%] relative overflow-hidden">

                {/* IMAGEN */}
                <img
                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1974&auto=format&fit=crop"
                    alt="campo"
                    className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/30"></div>

                {/* CONTENIDO */}
                <div className="absolute inset-0 flex flex-col justify-center px-16 text-white">

                    <div className="flex items-center gap-4 mb-8">

                        <div className="bg-white/20 backdrop-blur-md p-5 rounded-3xl shadow-2xl">

                            <FaLeaf className="text-5xl text-white" />

                        </div>

                        <div>

                            <h1 className="text-6xl font-extrabold leading-none">
                                AGRO
                            </h1>

                            <h1 className="text-6xl font-extrabold text-green-300 leading-none">
                                CONECTA
                            </h1>

                        </div>

                    </div>

                    <h2 className="text-5xl font-bold leading-tight max-w-2xl">

                        Únete a la revolución digital del campo 🌱

                    </h2>

                    <p className="text-2xl text-green-100 mt-8 max-w-xl leading-relaxed">

                        Regístrate y accede a teleconsultas veterinarias inteligentes para mejorar la salud animal y la productividad agropecuaria.

                    </p>

                    {/* BADGES */}
                    <div className="flex gap-5 mt-10">

                        <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">

                            🐄 Bienestar animal

                        </div>

                        <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">

                            📡 Atención remota

                        </div>

                    </div>

                </div>

            </div>

            {/* PANEL DERECHO */}
            <div className="w-full lg:w-[45%] bg-white flex justify-center items-center relative">

                {/* EFECTOS */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>

                <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-20"></div>

                {/* FORM CARD */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md shadow-2xl rounded-[35px] p-10 w-full max-w-xl border border-gray-100">

                    {/* TITULO */}
                    <div className="mb-10">

                        <h2 className="text-5xl font-extrabold text-green-800">
                            Crear cuenta
                        </h2>

                        <p className="text-gray-500 mt-3 text-lg">
                            Regístrate y comienza a usar AgroConecta
                        </p>

                    </div>

                    {/* FORM */}
                    <form
                        className="space-y-6"
                        onSubmit={handleRegister}
                    >

                        {/* NOMBRE */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Nombre completo
                            </label>

                            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 border border-gray-200 focus-within:border-green-600 transition duration-300">

                                <FaUser className="text-gray-400 mr-3" />

                                <input
                                    type="text"
                                    placeholder="Ingrese su nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="bg-transparent outline-none w-full"
                                    required
                                />

                            </div>

                        </div>

                        {/* CORREO */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Correo electrónico
                            </label>

                            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 border border-gray-200 focus-within:border-green-600 transition duration-300">

                                <FaEnvelope className="text-gray-400 mr-3" />

                                <input
                                    type="email"
                                    placeholder="Ingrese su correo"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    className="bg-transparent outline-none w-full"
                                    required
                                />

                            </div>

                        </div>

                        {/* PASSWORD */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Contraseña
                            </label>

                            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 border border-gray-200 focus-within:border-green-600 transition duration-300">

                                <FaLock className="text-gray-400 mr-3" />

                                <input
                                    type="password"
                                    placeholder="Ingrese su contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-transparent outline-none w-full"
                                    required
                                />

                            </div>

                        </div>

                        {/* TELEFONO */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Teléfono
                            </label>

                            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 border border-gray-200 focus-within:border-green-600 transition duration-300">

                                <FaPhoneAlt className="text-gray-400 mr-3" />

                                <input
                                    type="text"
                                    placeholder="Ingrese su teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    className="bg-transparent outline-none w-full"
                                    required
                                />

                            </div>

                        </div>

                        {/* DIRECCION */}
                        <div>

                            <label className="block mb-2 font-semibold text-gray-700">
                                Dirección / Vereda
                            </label>

                            <div className="flex items-center bg-gray-100 rounded-2xl px-4 py-4 border border-gray-200 focus-within:border-green-600 transition duration-300">

                                <FaMapMarkerAlt className="text-gray-400 mr-3" />

                                <input
                                    type="text"
                                    placeholder="Ingrese su dirección"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className="bg-transparent outline-none w-full"
                                    required
                                />

                            </div>

                        </div>

                        {/* BOTON */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-700 to-green-500 hover:scale-[1.02] transition duration-300 text-white py-4 rounded-2xl font-bold shadow-xl text-lg"
                        >

                            Registrarse

                        </button>

                    </form>

                    {/* LOGIN */}
                    <p className="text-center mt-8 text-gray-600 text-lg">

                        ¿Ya tienes cuenta?

                        <Link
                            to="/"
                            className="text-green-700 font-bold ml-2 hover:underline"
                        >
                            Inicia sesión
                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );
}

export default Register;