import React from 'react'
import * as S from '../styledGeral'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { goToExplorer, goToLogin, goToRegister,goToHome } from '../../Routes/Cordinator'
import { useHistory } from "react-router-dom";
import logo from '../../Assets/img/logo.png'
export default function Menu(){
  const history = useHistory();
  return(
     <S.MenuContainer>
              <S.LogoImg>
        <img src ={logo} alt ='logo'></img>
        
         </S.LogoImg>
         <S.NavContainer>
              <ul>
            <li><a onClick={() => goToHome(history)}>Sobre</a></li>
            <li><a onClick={() => goToExplorer(history)}>Explorar</a></li>
            <li><a onClick={() => goToRegister(history)}>Cadastrar</a></li>
            <li><a onClick={() => goToLogin(history)}>Login</a></li>
        </ul>
        <Footer/>
      </S.NavContainer>
    </S.MenuContainer>
      )
}
