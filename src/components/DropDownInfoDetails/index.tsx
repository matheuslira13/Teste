import { useState } from "react";
import { Modal } from "../Modal";
import "./styles.css";

export type DropDownInfoDetailsProps = {
  nome: string;
  solicitacao: string;
  status: "Enviado" | "Pendente";
  file: string;
  oficio: string;
  processo: string;
  estado: string;
  end: string;
  cep: string;
  descricao: string;
  designacao: string;
};

export const DropDownInfoDetails = ({
  cep,
  end,
  estado,
  file,
  nome,
  oficio,
  processo,
  solicitacao,
  status,
  descricao,
  designacao,
}: DropDownInfoDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [processoInput, setProcessoInput] = useState(processo);
  const [solicitacaoInput, setSolicitacaoInput] = useState(solicitacao);
  const [designacaoInput, setDesignacaoInput] = useState(designacao);
  const [descricaoInput, setDescricaoInput] = useState(descricao);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdownModal = () => setIsOpenModal(!isOpenModal);

  return (
    <div className="containerDropDownInfo">
      <div className="subContainerDropDownInfo">
        <div className="infoDisplay">
          <p>Nome:</p> <span>{nome}</span>
        </div>
        <div className="infoDisplay">
          <p>Solicitação:</p> <span>{solicitacao}</span>
        </div>
        <div className="infoDisplay">
          <p>Status:</p>{" "}
          <span style={{ color: status === "Enviado" ? "#d2e1a7" : "#ff5a6a" }}>
            {status}
          </span>
        </div>
        <button className="btnDropDowInfo" onClick={toggleDropdownModal}>
          Editar
        </button>
        <button className="btnDropDowInfo" onClick={() => file}>
          Download
        </button>

        <button className="btnDropDowInfo" onClick={toggleDropdown}>
          {isOpen ? "Fechar Detalhes" : "Ver Detalhes"}
        </button>
      </div>

      {isOpen && (
        <div
          style={{ marginTop: 12, borderTop: "1px solid #fff", paddingTop: 12 }}
        >
          <p>Ofício: {oficio}</p>
          <p>Processo: {processo}</p>
          <p>Estado: {estado}</p>
          <p>Endereço: {end}</p>
          <p>CEP: {cep}</p>
        </div>
      )}
      <Modal
        onClose={() => setIsOpenModal(false)}
        open={isOpenModal}
        closeOnOverlay={false}
        title={`Oficio ${oficio}`}
      >
        <div className="containerLabelModal">
          <p className="labelModal">Nome</p>
          <p className="textInputDropDown"> {nome}</p>
        </div>
        <div className="containerLabelModal">
          <p className="labelModal">solicitação</p>
          <input
            type="text"
            value={solicitacaoInput}
            className="textInputDropDown"
            onChange={(e) => setSolicitacaoInput(e.target.value)}
          />
        </div>

        <div className="containerLabelModal">
          <p className="labelModal">Processo</p>
          <input
            type="text"
            value={processoInput}
            onChange={(e) => setProcessoInput(e.target.value)}
            className="textInputDropDown"
          />
        </div>
        <div className="containerLabelModal">
          <p className="labelModal">Designação</p>
          <input
            type="text"
            value={designacaoInput}
            className="textInputDropDown"
            onChange={(e) => setDesignacaoInput(e.target.value)}
          />
        </div>
        <div className="containerLabelModal">
          <p className="labelModal">Descrição </p>
          <textarea
            value={descricaoInput}
            onChange={(e) => setDescricaoInput(e.target.value)}
            className="textAreaDropDown"
          />
        </div>
      </Modal>
    </div>
  );
};
