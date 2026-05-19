import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SplashScreen from "../pages/Auth/SplashScreen";

import Welcome from "../pages/Auth/Welcome";

import Login from "../pages/Auth/Login";

import Register from "../pages/Auth/Register";

import ForgotPassword from "../pages/Auth/ForgotPassword";

import ResetPassword from "../pages/Auth/ResetPassword";

import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Splash */}

        <Route
          path="/"
          element={<SplashScreen />}
        />

        {/* Welcome */}

        <Route
          path="/welcome"
          element={<Welcome />}
        />

        {/* Auth */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;