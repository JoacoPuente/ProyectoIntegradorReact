import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Products } from "./screens/Products";
import { Contacto } from "./screens/Contact";
import { Register } from "./screens/Register";
import { Login } from "./screens/Login";

function App() {
  return (
    // <LoginForm />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contacto />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
