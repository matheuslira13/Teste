import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import BackgroundLayout from "./components/BackgroundLayout";
import "./styles.css";

const isAuthenticated = () => !!sessionStorage.getItem("token");

const PrivateRoute = ({ children }: any) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <BackgroundLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BackgroundLayout>
    </BrowserRouter>
  );
}

export default App;
