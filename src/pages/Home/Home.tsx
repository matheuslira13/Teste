import { useNavigate } from "react-router-dom";
import "./styles.css";
import { DropDownInfoDetails } from "../../components/DropDownInfoDetails";
import { mock } from "../../mock";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  /*   const handleDownload = (descricao: any) => {
    alert(`Baixando ofício de: ${descricao}`);
  }; */

  return (
    <div className="homeContainer">
      <div className="header">
        <h1>Dashboard</h1>
        <button className="buttonHome" onClick={handleLogout}>
          Sair
        </button>
      </div>

      {mock.map((item) => (
        <DropDownInfoDetails
          cep={item.cep}
          end={item.end}
          estado={item.estado}
          file={item.file}
          nome={item.nome}
          oficio={item.oficio}
          processo={item.processo}
          solicitacao={item.solicitacao}
          status={item.status}
          descricao={item.descricao}
          designacao={item.designacao}
        />
      ))}
    </div>
  );
}

export default Home;
