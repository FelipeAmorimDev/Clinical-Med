import { PlusSquare } from "@phosphor-icons/react";
import {
  PacientesContainer,
  CadastroBtn,
  PacientesList,
} from "../Pacientes/style";

export function Medicos() {
  return (
    <section>
      <PacientesContainer>
        <h1>Medicos</h1>
        <CadastroBtn>
          <PlusSquare size={16} color="#FFFFFF" /> NOVO MEDICO
        </CadastroBtn>
        <PacientesList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Data de cadastro</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Felipe De Castro Amorim</td>
                <td>28 anos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Maria Do Carmos Santos</td>
                <td>28 anos</td>
                <td>Há cerca de 7 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego Barbosa Lopes</td>
                <td>16 anos</td>
                <td>Há cerca de 6 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Martina Oliveira Dos Anjos</td>
                <td>11 anos</td>
                <td>Há cerca de 9 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Mario Coimbra Ramos</td>
                <td>28 anos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Pietro Wagner Armani</td>
                <td>28 anos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Maria Do Carmos Santos</td>
                <td>28 anos</td>
                <td>Há cerca de 7 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego Barbosa Lopes</td>
                <td>16 anos</td>
                <td>Há cerca de 6 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Martina Oliveira Dos Anjos</td>
                <td>11 anos</td>
                <td>Há cerca de 9 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Maria Do Carmos Santos</td>
                <td>28 anos</td>
                <td>Há cerca de 7 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego Barbosa Lopes</td>
                <td>16 anos</td>
                <td>Há cerca de 6 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Martina Oliveira Dos Anjos</td>
                <td>11 anos</td>
                <td>Há cerca de 9 meses</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </PacientesList>
      </PacientesContainer>
    </section>
  );
}
