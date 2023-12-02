import { PlusSquare } from "@phosphor-icons/react";
import { PacientesContainer, CadastroBtn, PacientesList } from "./style";
import { useState, useEffect } from "react";
import { api } from "../../lib/api";

interface IEndereco {
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

interface IDetalhes {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: IEndereco;
}

interface IPacientes {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  detalhes: IDetalhes;
}

export function Pacientes() {
  const [pacientes, setPacientes] = useState<IPacientes[]>([]);

  async function fetchAPI() {
    const response = await api.get("/pacientes");
    setPacientes(response.data);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section>
      <PacientesContainer>
        <h1>Pacientes</h1>
        <CadastroBtn>
          <PlusSquare size={16} color="#FFFFFF" /> NOVO PACIENTE
        </CadastroBtn>
        <PacientesList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente) => {
                const nameCapitalized = `${paciente.nome[0].toLocaleUpperCase()}${paciente.nome.slice(1)}`
                
                return (
                  <tr key={paciente.id}>
                    <td>{nameCapitalized}</td>
                    <td>{paciente.email}</td>
                    <td>{paciente.cpf}</td>
                    <td>
                      <button>Editar</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </PacientesList>
      </PacientesContainer>
    </section>
  );
}
