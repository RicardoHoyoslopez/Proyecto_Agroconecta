import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUsuario } from "../services/authService";

import {
  FaEnvelope,
  FaLock,
  FaLeaf
} from "react-icons/fa";

function Login() {

  const navigate = useNavigate();

  // ESTADOS
  const [correo_usuario, setCorreoUsuario] = useState("");
  const [password_usuario, setPasswordUsuario] = useState("");

  // LOGIN
  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await loginUsuario({

        correo_usuario,
        password_usuario

      });

      console.log(response.data);

      const usuario = response.data.usuario;

      // GUARDAR USUARIO
      localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
      );

      // REDIRECCION SEGUN ROL
      if (usuario.rol === "Productor") {

        navigate("/dashboard-productor");

      } else if (usuario.rol === "Veterinario") {

        navigate("/dashboard-veterinario");

      }

    } catch (error) {

      console.error(error);

      alert("Credenciales incorrectas");

    }

  };

  return (

    <div className="min-h-screen flex overflow-hidden">

      {/* PANEL IZQUIERDO */}
      <div className="w-full lg:w-[40%] bg-white flex justify-center items-center relative z-10">

        {/* EFECTO BLUR */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>

        <div className="relative z-20 w-full max-w-md px-8 py-10">

          {/* LOGO */}
          <div className="text-center mb-10">

            <div className="flex justify-center items-center gap-3 mb-4">

              <div className="bg-green-700 p-4 rounded-2xl shadow-lg">

                <FaLeaf className="text-white text-3xl" />

              </div>

              <div>

                <h1 className="text-5xl font-extrabold text-green-800 leading-none">
                  AGRO
                </h1>

                <h1 className="text-5xl font-extrabold text-green-500 leading-none">
                  CONECTA
                </h1>

              </div>

            </div>

            <p className="text-gray-500 text-lg">
              Teleconsulta veterinaria que conecta el campo con la tecnología
            </p>

          </div>

          {/* TITULO */}
          <div className="mb-8">

            <h2 className="text-4xl font-bold text-green-800">
              Iniciar sesión
            </h2>

            <p className="text-gray-500 mt-2">
              Bienvenido nuevamente a AgroConecta
            </p>

          </div>

          {/* FORM */}
          <form
            className="space-y-6"
            onSubmit={handleLogin}
          >

            {/* CORREO */}
            <div>

              <label className="block mb-2 text-gray-700 font-semibold">
                Correo electrónico
              </label>

              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-green-600 transition duration-300">

                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={correo_usuario}
                  onChange={(e) => setCorreoUsuario(e.target.value)}
                  className="bg-transparent outline-none w-full"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="block mb-2 text-gray-700 font-semibold">
                Contraseña
              </label>

              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-green-600 transition duration-300">

                <FaLock className="text-gray-400 mr-3" />

                <input
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  value={password_usuario}
                  onChange={(e) => setPasswordUsuario(e.target.value)}
                  className="bg-transparent outline-none w-full"
                  required
                />

              </div>

            </div>

            {/* OPCIONES */}
            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2 text-gray-600">

                <input type="checkbox" />

                Recordarme

              </label>

              <button
                type="button"
                className="text-green-700 font-semibold hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </button>

            </div>

            {/* BOTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-700 to-green-500 hover:scale-[1.02] transition duration-300 text-white py-4 rounded-xl font-bold shadow-lg"
            >
              Iniciar sesión
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center my-8">

            <div className="flex-1 border-t border-gray-300"></div>

            <p className="px-4 text-gray-400 text-sm">
              o inicia con
            </p>

            <div className="flex-1 border-t border-gray-300"></div>

          </div>

          {/* REDES */}
          <div className="flex justify-center gap-5">

            <button className="bg-white border border-gray-300 w-14 h-14 rounded-2xl flex items-center justify-center shadow hover:scale-110 transition duration-300">

              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="google"
                className="w-7"
              />

            </button>

            <button className="bg-white border border-gray-300 w-14 h-14 rounded-2xl flex items-center justify-center shadow hover:scale-110 transition duration-300">

              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="facebook"
                className="w-7"
              />

            </button>

          </div>

          {/* REGISTER */}
          <p className="text-center mt-8 text-gray-600">

            ¿No tienes cuenta?

            <Link
              to="/register"
              className="text-green-700 font-bold ml-1 hover:underline"
            >
              Regístrate
            </Link>

          </p>

        </div>

      </div>

      {/* PANEL DERECHO */}
      <div className="hidden lg:flex w-[60%] relative overflow-hidden">

        {/* IMAGEN */}
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1974&auto=format&fit=crop"
          alt="campo"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent"></div>

        {/* TEXTO */}
        <div className="absolute bottom-20 left-16 text-white max-w-xl animate-fadeIn">

          <h1 className="text-6xl font-extrabold leading-tight mb-6">

            Conectando el campo con la tecnología 🌱

          </h1>

          <p className="text-2xl text-green-100">

            Plataforma inteligente de teleconsultas veterinarias para productores agropecuarios.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Login;