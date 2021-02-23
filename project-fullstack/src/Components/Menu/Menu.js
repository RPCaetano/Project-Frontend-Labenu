import React from 'react'
import * as S from '../styledGeral'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { goToExplorer, goToLogin, goToRegister } from '../../Routes/Cordinator'
import { useHistory } from "react-router-dom";

export default function Menu(){
  const history = useHistory();
  return(
    <S.MenuContainer>
      <Header/>
      <S.NavContainer>
              <ul>
            <li><a onClick={() => goToExplorer(history)}>Explorar</a></li>
            <li><a onClick={() => goToRegister(history)}>Cadastro</a></li>
            <li><a onClick={() => goToLogin(history)}>Login</a></li>
        </ul>
        <Footer/>
      </S.NavContainer>
    </S.MenuContainer>
  )
}
