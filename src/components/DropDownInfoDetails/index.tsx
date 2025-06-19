import React, { useState } from "react";

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
}: DropDownInfoDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #FFF",
        margin: 12,
        padding: 12,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // Distribui igualmente

          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <p>Nome:</p> <span>{nome}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <p>Solicitação:</p> <span>{solicitacao}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <p>Status:</p>{" "}
          <span style={{ color: status === "Enviado" ? "#d2e1a7" : "#ff5a6a" }}>
            {status}
          </span>
        </div>
        <button style={{ width: 200 }} onClick={() => file}>
          Download
        </button>

        <button style={{ width: 200 }} onClick={toggleDropdown}>
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
    </div>
  );
};
