import { useNavigate } from "react-router-dom";
import { useState

 } from "react";
function AuthForm({empresa}){
    const navigate=useNavigate();

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const handleLogin=()=>{
        //TODO: validate login
        navigate("/dashboard"); //after login
    };
    
    return (
        <div>
            <h2>{empresa} - Iniciar sesión</h2>
            <form>
                <input
                type="email"
                placeholder="Correo"
                valye={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Contraseña"
                valye={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </form>
            
            <button onClick={handleLogin}>Iniciar sesión</button>
            
            <p>
                No tienes cuenta? {" "}
                <button onClick={()=>navigate("/register")}>Registrarse</button>
            </p>
        </div>
    );
}
export default AuthForm;