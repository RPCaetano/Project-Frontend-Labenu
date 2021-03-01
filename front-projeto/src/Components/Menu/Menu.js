import React from 'react'
import * as S from '../../Styles/Header'
import Footer from '../Footer/Footer'
import { goToExplorer, goToLogin, goToRegister,goToHome } from '../../Routes/Cordinator'
import { useHistory } from "react-router-dom";

export default function Menu(){
  const history = useHistory();
  return(
     <S.MenuContainer>
      
         <S.NavContainer>
              <ul>
                <li>
            <a onClick={() => goToHome(history)}>Sobre</a>
            <a onClick={() => goToExplorer(history)}>Explorar</a>
            <a onClick={() => goToRegister(history)}>Cadastrar</a>
            <a onClick={() => goToLogin(history)}>Login</a>
               </li>
             </ul>
        <Footer/>
      </S.NavContainer>
    </S.MenuContainer>
      )
}
