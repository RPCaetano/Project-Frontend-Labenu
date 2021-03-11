import React from 'react'
import * as S from '../../Styles/Header'
import {  goToRegister,goToHome, goToLoginPage, goToAllCollection } from '../../Routes/Cordinator'
import { useHistory } from "react-router-dom";

 const Menu = ({rightButtonText,setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory();
 
  const logout=()=>{
   localStorage.removeItem("token")
  }
    const rightButtonAction =()=>{
   if(token){
     logout()
     setRightButtonText("Login")
     goToLoginPage(history)
   }else
   goToLoginPage(history)
 }
 
  return(
     <S.MenuContainer>
        
         <S.NavContainer>
      
              <ul>
                <li>
            <a onClick={() => goToHome(history)}>Sobre</a>
            <a onClick={() => goToAllCollection(history)}>Explorar</a>
            <a onClick={() => goToRegister(history)}>Cadastrar</a>
            <a onClick={rightButtonAction}>{rightButtonText}</a>
           
               </li>
            
             </ul>
             <hr></hr>
        {/* <Footer/> */}
      </S.NavContainer>
      
    </S.MenuContainer>
      )
}
export default Menu
