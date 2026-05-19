import AppRoutes from "./routes/AppRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return <AppRoutes />;
  <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
  />
}

export default App;