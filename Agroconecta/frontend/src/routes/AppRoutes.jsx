import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardProductor from "../pages/DashboardProductor";
import Dashboardveterinario from "../pages/DashboardVeterinario";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard-productor"
                    element={<DashboardProductor />}
                />
                <Route
                    path="/dashboard-veterinario"
                    element={<Dashboardveterinario />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;