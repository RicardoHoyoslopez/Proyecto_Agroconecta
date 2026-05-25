import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUserMd,
  FaCalendarCheck,
  FaBell,
  FaSignOutAlt,
  FaUserFriends,
  FaNotesMedical,
  FaVideo,
  FaClipboardList
} from "react-icons/fa";

function DashboardVeterinario() {

  const navigate = useNavigate();

  // OBTENER USUARIO
  const usuario = JSON.parse(
    localStorage.getItem("usuario")
  );

  // PROTEGER RUTA
  useEffect(() => {

    const usuarioGuardado = localStorage.getItem("usuario");

    if (!usuarioGuardado) {

      navigate("/");

    }

  }, []);

  // CERRAR SESION
  const cerrarSesion = () => {

    localStorage.removeItem("usuario");

    navigate("/");

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-green-50 to-gray-100 flex overflow-hidden">

      {/* EFECTOS DE FONDO */}
      <div className="fixed top-0 left-0 w-72 h-72 bg-green-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 bg-green-200 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* SIDEBAR */}
      <div className="w-[280px] bg-gradient-to-b from-green-800 to-green-600 text-white shadow-2xl p-8 hidden lg:flex flex-col justify-between border-r border-white/10 backdrop-blur-lg animate-[fadeInLeft_0.8s_ease]">

        <div>

          {/* LOGO */}
          <div className="mb-14">

            <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">

              AgroConecta 🌱

            </h1>

            <p className="text-green-100 mt-3 text-lg">

              Panel Veterinario

            </p>

          </div>

          {/* MENU */}
          <div className="space-y-4">

            <button className="w-full bg-white/20 hover:bg-white/30 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg shadow-lg hover:shadow-green-400/30">

              <FaClipboardList className="text-xl" />

              Consultas

            </button>

            <button className="w-full hover:bg-white/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaVideo className="text-xl" />

              Teleconsultas

            </button>

            <button className="w-full hover:bg-white/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaNotesMedical className="text-xl" />

              Historial clínico

            </button>

            <button className="w-full hover:bg-white/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaBell className="text-xl" />

              Alertas

            </button>

          </div>

        </div>

        {/* BOTON */}
        <button
          onClick={cerrarSesion}
          className="bg-white text-green-700 font-bold py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-green-300/50"
        >

          <FaSignOutAlt />

          Cerrar sesión

        </button>

      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto">

        {/* HEADER */}
        <div className="bg-white/80 backdrop-blur-lg shadow-md px-10 py-8 flex justify-between items-center border-b border-gray-200 animate-[fadeInDown_0.8s_ease]">

          <div>

            <h1 className="text-4xl font-bold text-gray-800">

              Bienvenido, {usuario?.nombre} 👨‍⚕️

            </h1>

            <p className="text-gray-500 mt-2 text-lg">

              Gestiona consultas y monitorea animales en tiempo real

            </p>

          </div>

          {/* PERFIL */}
          <div className="flex items-center gap-4">

            <div className="text-right">

              <h2 className="font-bold text-gray-800 text-lg">
                {usuario?.nombre}
              </h2>

              <p className="text-gray-500">
                Veterinario
              </p>

            </div>

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white text-2xl font-bold shadow-2xl hover:rotate-6 transition duration-300">

              {usuario?.nombre?.charAt(0)}

            </div>

          </div>

        </div>

        {/* MAIN */}
        <div className="p-10">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-lg p-7 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-white/40 animate-[fadeInUp_0.7s_ease]">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Consultas hoy
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    12
                  </h2>

                </div>

                <div className="bg-blue-100 p-5 rounded-2xl shadow-inner">

                  <FaCalendarCheck className="text-4xl text-blue-500 animate-pulse" />

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-lg p-7 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-white/40 animate-[fadeInUp_0.8s_ease]">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Productores
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    28
                  </h2>

                </div>

                <div className="bg-green-100 p-5 rounded-2xl shadow-inner">

                  <FaUserFriends className="text-4xl text-green-600" />

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-lg p-7 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-white/40 animate-[fadeInUp_0.9s_ease]">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Casos críticos
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    3
                  </h2>

                </div>

                <div className="bg-red-100 p-5 rounded-2xl shadow-inner">

                  <FaNotesMedical className="text-4xl text-red-500 animate-pulse" />

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-lg p-7 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-white/40 animate-[fadeInUp_1s_ease]">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Teleconsultas
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    9
                  </h2>

                </div>

                <div className="bg-yellow-100 p-5 rounded-2xl shadow-inner">

                  <FaVideo className="text-4xl text-yellow-500" />

                </div>

              </div>

            </div>

          </div>

          {/* SECCION PRINCIPAL */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

            {/* CONSULTAS */}
            <div className="xl:col-span-2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-md p-8 border border-white/40 animate-[fadeInLeft_1s_ease]">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold text-gray-800">

                  Consultas recientes 🩺

                </h2>

                <button className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-300 px-5 py-3 rounded-2xl text-white font-bold shadow-xl hover:shadow-green-400/40">

                  Ver todas

                </button>

              </div>

              <div className="space-y-5">

                {/* ITEM */}
                <div className="bg-gray-50 hover:bg-green-50 hover:scale-[1.01] transition-all duration-300 p-6 rounded-2xl flex justify-between items-center border border-gray-100 hover:shadow-lg">

                  <div>

                    <h3 className="font-bold text-xl text-gray-800">
                      Fiebre bovina
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Productor: Carlos Méndez
                    </p>

                  </div>

                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold animate-pulse">

                    Urgente

                  </span>

                </div>

                {/* ITEM */}
                <div className="bg-gray-50 hover:bg-green-50 hover:scale-[1.01] transition-all duration-300 p-6 rounded-2xl flex justify-between items-center border border-gray-100 hover:shadow-lg">

                  <div>

                    <h3 className="font-bold text-xl text-gray-800">
                      Vacunación porcina
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Productor: Juana López
                    </p>

                  </div>

                  <span className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-xl font-bold">

                    Pendiente

                  </span>

                </div>

                {/* ITEM */}
                <div className="bg-gray-50 hover:bg-green-50 hover:scale-[1.01] transition-all duration-300 p-6 rounded-2xl flex justify-between items-center border border-gray-100 hover:shadow-lg">

                  <div>

                    <h3 className="font-bold text-xl text-gray-800">
                      Revisión ovina
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Productor: Andrés Torres
                    </p>

                  </div>

                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-xl font-bold">

                    Completada

                  </span>

                </div>

              </div>

            </div>

            {/* ALERTAS */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-md p-8 border border-white/40 animate-[fadeInRight_1s_ease]">

              <h2 className="text-3xl font-bold text-gray-800 mb-8">

                Alertas 🔔

              </h2>

              <div className="space-y-5">

                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-2xl hover:scale-[1.02] transition duration-300 shadow-sm hover:shadow-md">

                  🚨 Caso crítico reportado en bovino

                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-2xl hover:scale-[1.02] transition duration-300 shadow-sm hover:shadow-md">

                  📅 Consulta programada para mañana

                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-2xl hover:scale-[1.02] transition duration-300 shadow-sm hover:shadow-md">

                  📡 Nueva teleconsulta recibida

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ANIMACIONES PERSONALIZADAS */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </div>

  );

}

export default DashboardVeterinario;