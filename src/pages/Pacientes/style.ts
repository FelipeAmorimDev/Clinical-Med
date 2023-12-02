import styled from "styled-components";

export const PacientesContainer = styled.div`
  max-width: 900px;
  margin: 40px auto 0;
  padding: 0px 20px;
  h1 {
    font-family: "inter";
    font-size: 1.375rem;
    letter-spacing: -0.25px;
    margin-bottom: 32px;
  }
`;

export const CadastroBtn = styled.button`
  padding: 10px 16px;
  background: ${(props) => props.theme["blue-btn"]};
  border: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "roboto";
  font-weight: bold;
  font-size: 0.625rem;
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  border: 1px solid transparent;

  margin-bottom: 36px;

  &:hover {
    background: transparent;
    color: ${(props) => props.theme["blue-btn"]};
    border-color: ${(props) => props.theme["blue-btn"]};
  }

  &:hover svg {
    fill: ${(props) => props.theme["blue-btn"]};
  }
`;

export const PacientesList = styled.div`
  font-family: "roboto";
  height: 420px;
  overflow: scroll;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  table {
    height: 600px;
    text-align: left;
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    background-color: ${(props) => props.theme["blue-600"]};
    padding: 1rem;
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme["table-header"]};

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme["blue-300"]};
    border-top: 4px solid ${(props) => props.theme.white};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props => props.theme["table-body"]};
    &:first-child {
      padding-left: 1.5rem;
      width: 35%;
    }

    &:last-child {
      padding-right: 1.5rem;
    }

    &:last-of-type {
      button {
        font-weight: bold;
        color: inherit;
        background: transparent;
        border: 0;
        cursor: pointer;
        transition: color .2s;

        &:hover {
          color: #DA913F;
        }

      }
    }
  }
`;
