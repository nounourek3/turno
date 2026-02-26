import { useNavigate } from "react-router-dom";

function EmpresaPage({empresa, setEmpresa}){
    const navigate=useNavigate();
    
    const handleNext=()=>{
        if(empresa.trim()==="")
            return alert("Introduce el nombre de la empresa");
        navigate("/login");
    };

    return(
        <div>
            <h1>Registro de Empresa</h1>
            <input
            type="text"
            placeholder="Nombre Empresa"
            value={empresa}
            onChange={(e)=>setEmpresa(e.target.value)}
            />
            <button onClick={handleNext}>Siguiente</button>
        </div>
    );
}
export default EmpresaPage;