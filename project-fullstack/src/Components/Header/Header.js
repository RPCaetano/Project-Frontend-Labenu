import React from 'react'
import * as S from '../styledGeral'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import logo from '../../Assets/img/logo.png'

export default function Header(){
    return (
   
     
        <S.HeaderContainer>
               <S.LogoImg>
        <img src ={logo} alt ='logo'></img>
        
         </S.LogoImg>
         
            <Menu/>
        
        </S.HeaderContainer>
    
        )
}