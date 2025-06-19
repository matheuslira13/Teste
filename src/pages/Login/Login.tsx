import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem("token", "123456");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loginContainer">
        <h2 className="titleLogin">Entra</h2>
        <input type="text" placeholder="Usuário" className="inputUserClass" />
        <input type="password" placeholder="Senha" className="inputUserClass" />
        <button onClick={handleLogin} className="buttonLogin">
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
