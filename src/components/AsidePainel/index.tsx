import { Users, FirstAidKit, CalendarX, UserSquare, BagSimple, Question } from "@phosphor-icons/react";
import { PainelHeader, UserInfo, UserRole, UserName, NavMenu, MenuContainer, NavList } from "./styles";

export function AsidePainel() {
  return (
    <aside>
    <PainelHeader>
      <img src="../public/admin.jfif" alt="" />
      <UserInfo>
        <UserRole>Administrador</UserRole>
        <UserName>Diego Max Arruda</UserName>
      </UserInfo>
    </PainelHeader>

    <NavMenu>
      <MenuContainer>
        <strong>PROFISSIONAL</strong>

        <NavList>
          <li>
            <a href="/">
              <Users size={20} color="#7C8EA7" weight="bold" /> Pacientes{" "}
             
            </a>
          </li>
          <li>
            <a href="/medicos">
              <FirstAidKit size={20} color="#7C8EA7" weight="bold" />
              Medicos
            </a>
          </li>
          <li>
            <a href="/consultas">
              <CalendarX size={20} color="#7C8EA7" weight="bold" />
              Consultas
            </a>
          </li>
        </NavList>
      </MenuContainer>

      <MenuContainer>
        <strong>ADMINISTRADOR</strong>
        <NavList>
          <li> <a href="">
          <UserSquare size={20} weight="fill" color="#7C8EA7" />
          Usuários
        </a></li>
          <li> <a href="">
          <BagSimple size={20} color="#7C8EA7" />
          Financeiro
        </a></li>
          <li> <a href="">
          <Question size={20} color="#7C8EA7" weight="bold" />
          Central de ajuda
        </a></li>
        </NavList>
       
       
       
      </MenuContainer>
    </NavMenu>
  </aside>
  )
}