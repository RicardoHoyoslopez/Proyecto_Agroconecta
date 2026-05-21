import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaPiggyBank,
  FaCalendarAlt,
  FaBell,
  FaSignOutAlt
} from "react-icons/fa";

import { GiCow } from "react-icons/gi";

function DashboardProductor() {

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

    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 p-8 text-white shadow-lg rounded-b-3xl flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Hola, {usuario?.nombre} 👋
          </h1>

          <p className="mt-2 text-green-100">
            Bienvenido a AgroConecta
          </p>

        </div>

        {/* BOTON CERRAR SESION */}
        <button
          onClick={cerrarSesion}
          className="bg-white text-green-700 px-6 py-3 rounded-2xl font-bold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300 flex items-center gap-3"
        >

          <FaSignOutAlt />

          Cerrar sesión

        </button>

      </div>

      {/* CONTENIDO */}
      <div className="p-8">

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* VACAS */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-lg">
                  Vacas
                </p>

                <h2 className="text-4xl font-bold mt-2 text-gray-800">
                  12
                </h2>

                <p className="text-green-600 mt-2 font-medium">
                  Estado bueno
                </p>

              </div>

              <GiCow className="text-6xl text-green-600" />

            </div>

          </div>

          {/* CERDOS */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-lg">
                  Cerdos
                </p>

                <h2 className="text-4xl font-bold mt-2 text-gray-800">
                  8
                </h2>

                <p className="text-yellow-500 mt-2 font-medium">
                  1 alerta
                </p>

              </div>

              <FaPiggyBank className="text-6xl text-pink-500" />

            </div>

          </div>

          {/* CONSULTAS */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-lg">
                  Consultas
                </p>

                <h2 className="text-4xl font-bold mt-2 text-gray-800">
                  4
                </h2>

                <p className="text-blue-500 mt-2 font-medium">
                  Activas
                </p>

              </div>

              <FaCalendarAlt className="text-6xl text-blue-500" />

            </div>

          </div>

          {/* ALERTAS */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-500 text-lg">
                  Alertas
                </p>

                <h2 className="text-4xl font-bold mt-2 text-gray-800">
                  2
                </h2>

                <p className="text-red-500 mt-2 font-medium">
                  Revisar
                </p>

              </div>

              <FaBell className="text-6xl text-yellow-500" />

            </div>

          </div>

        </div>

        {/* SECCION PRINCIPAL */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ESTADO FINCA */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Estado de la finca 🌱
            </h2>

            <div className="space-y-5">

              <div className="bg-green-100 p-5 rounded-xl flex justify-between items-center">

                <div>
                  <h3 className="font-bold text-green-800">
                    Pasto
                  </h3>

                  <p className="text-green-700">
                    Estado óptimo
                  </p>
                </div>

                <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>

              </div>

              <div className="bg-blue-100 p-5 rounded-xl flex justify-between items-center">

                <div>
                  <h3 className="font-bold text-blue-800">
                    Suelo
                  </h3>

                  <p className="text-blue-700">
                    Humedad adecuada
                  </p>
                </div>

                <span className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></span>

              </div>

              <div className="bg-yellow-100 p-5 rounded-xl flex justify-between items-center">

                <div>
                  <h3 className="font-bold text-yellow-800">
                    Clima
                  </h3>

                  <p className="text-yellow-700">
                    Soleado - 28°C
                  </p>
                </div>

                <span className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></span>

              </div>

            </div>

          </div>

          {/* NOTIFICACIONES */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Notificaciones 🔔
            </h2>

            <div className="space-y-4">

              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg hover:scale-105 transition">

                ✅ Consulta aceptada

              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg hover:scale-105 transition">

                📅 Consulta programada mañana

              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg hover:scale-105 transition">

                💉 Vacunación próxima

              </div>

            </div>

          </div>

        </div>

        {/* ACCIONES RAPIDAS */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-8">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Acciones rápidas ⚡
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <button className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-xl font-bold shadow-md transition hover:scale-105">

              ➕ Nueva consulta

            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-xl font-bold shadow-md transition hover:scale-105">

              📋 Ver historial

            </button>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-5 rounded-xl font-bold shadow-md transition hover:scale-105">

              🔔 Recordatorios

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default DashboardProductor;