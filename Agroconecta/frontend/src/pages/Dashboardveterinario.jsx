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

    <div className="min-h-screen bg-gray-100 flex">

      {/* SIDEBAR */}
      <div className="w-[280px] bg-gradient-to-b from-green-800 to-green-600 text-white shadow-2xl p-8 hidden lg:flex flex-col justify-between">

        <div>

          {/* LOGO */}
          <div className="mb-14">

            <h1 className="text-4x1 font-extrabold">
              AgroConecta 🌱
            </h1>

            <p className="text-green-100 mt-3">
              Panel Veterinario
            </p>

          </div>

          {/* MENU */}
          <div className="space-y-4">

            <button className="w-full bg-white/20 hover:bg-white/30 transition duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaClipboardList />

              Consultas

            </button>

            <button className="w-full hover:bg-white/20 transition duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaVideo />

              Teleconsultas

            </button>

            <button className="w-full hover:bg-white/20 transition duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaNotesMedical />

              Historial clínico

            </button>

            <button className="w-full hover:bg-white/20 transition duration-300 rounded-2xl p-4 flex items-center gap-4 text-lg">

              <FaBell />

              Alertas

            </button>

          </div>

        </div>

        {/* BOTON */}
        <button
          onClick={cerrarSesion}
          className="bg-white text-green-700 font-bold py-4 rounded-2xl hover:scale-105 transition duration-300 flex items-center justify-center gap-3 shadow-xl"
        >

          <FaSignOutAlt />

          Cerrar sesión

        </button>

      </div>

      {/* CONTENIDO */}
      <div className="flex-1 overflow-y-auto">

        {/* HEADER */}
        <div className="bg-white shadow-md px-10 py-8 flex justify-between items-center">

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

            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center text-white text-2xl font-bold shadow-xl">

              {usuario?.nombre?.charAt(0)}

            </div>

          </div>

        </div>

        {/* MAIN */}
        <div className="p-10">

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* CARD */}
            <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Consultas hoy
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    12
                  </h2>

                </div>

                <div className="bg-blue-100 p-5 rounded-2xl">

                  <FaCalendarCheck className="text-4xl text-blue-500" />

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Productores
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    28
                  </h2>

                </div>

                <div className="bg-green-100 p-5 rounded-2xl">

                  <FaUserFriends className="text-4xl text-green-600" />

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Casos críticos
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    3
                  </h2>

                </div>

                <div className="bg-red-100 p-5 rounded-2xl">

                  <FaNotesMedical className="text-4xl text-red-500" />

                </div>

              </div>

            </div>

            {/* CARD */}
            <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2">

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500 text-lg">
                    Teleconsultas
                  </p>

                  <h2 className="text-5xl font-extrabold text-gray-800 mt-3">
                    9
                  </h2>

                </div>

                <div className="bg-yellow-100 p-5 rounded-2xl">

                  <FaVideo className="text-4xl text-yellow-500" />

                </div>

              </div>

            </div>

          </div>

          {/* SECCION PRINCIPAL */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-10">

            {/* CONSULTAS */}
            <div className="xl:col-span-2 bg-white rounded-3xl shadow-md p-8">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold text-gray-800">

                  Consultas recientes 🩺

                </h2>

                <button className="bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-2xl text-white font-bold shadow-lg">

                  Ver todas

                </button>

              </div>

              <div className="space-y-5">

                {/* ITEM */}
                <div className="bg-gray-50 hover:bg-green-50 transition duration-300 p-6 rounded-2xl flex justify-between items-center border border-gray-100">

                  <div>

                    <h3 className="font-bold text-xl text-gray-800">
                      Fiebre bovina
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Productor: Carlos Méndez
                    </p>

                  </div>

                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold">

                    Urgente

                  </span>

                </div>

                {/* ITEM */}
                <div className="bg-gray-50 hover:bg-green-50 transition duration-300 p-6 rounded-2xl flex justify-between items-center border border-gray-100">

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
                <div className="bg-gray-50 hover:bg-green-50 transition duration-300 p-6 rounded-2xl flex justify-between items-center border border-gray-100">

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
            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-3xl font-bold text-gray-800 mb-8">

                Alertas 🔔

              </h2>

              <div className="space-y-5">

                <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-2xl">

                  🚨 Caso crítico reportado en bovino

                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-2xl">

                  📅 Consulta programada para mañana

                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-2xl">

                  📡 Nueva teleconsulta recibida

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default DashboardVeterinario;