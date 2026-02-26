import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmpresaPage from "./pages/EmpresaPage";
import AuthFormPage from "./pages/AuthFormPage";
import Dashboard from "./pages/Dashboard";
import RegisterPage from "./pages/RegisterPage";

import './App.css';

function App() {
  const [empresa, setEmpresa]= useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmpresaPage empresa={empresa} setEmpresa={setEmpresa}/>}
        />
        <Route path="/login" element={<AuthFormPage empresa={empresa}/>}/>
        <Route path="/dashboard" element={<Dashboard empresa={empresa}/>}/>
        <Route path="/register" element={<RegisterPage empresa={empresa}/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
