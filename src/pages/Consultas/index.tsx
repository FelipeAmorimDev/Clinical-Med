import { PlusSquare } from "@phosphor-icons/react";
import {
  PacientesContainer,
  CadastroBtn,
  PacientesList,
} from "../Pacientes/style";



export function Consultas() {
  return (
    <section>
      <PacientesContainer>
        <h1>Consultas</h1>
        <CadastroBtn>
          <PlusSquare size={16} color="#FFFFFF" /> CADASTRA CONSULTA
        </CadastroBtn>
        <PacientesList>
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Medico</th>
                <th>Data da consulta</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Felipe De Castro Amorim</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Maria Do Carmos Santos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego Barbosa Lopes</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Martina Oliveira Dos Anjos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Mario Coimbra Ramos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Pietro Wagner Armani</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Maria Do Carmos Santos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego Barbosa Lopes</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Martina Oliveira Dos Anjos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Maria Do Carmos Santos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Diego Barbosa Lopes</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
                <td>
                  <button>Editar</button>
                </td>
              </tr>
              <tr>
                <td>Martina Oliveira Dos Anjos</td>
                <td>Dr Leonardo Lopes</td>
                <td>22/12/2023 16:30</td>
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
