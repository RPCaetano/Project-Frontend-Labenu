import React from 'react'
import * as S from '../styledGeral'
import Footer from '../Footer/Footer'
import logo from '../../Assets/img/logo.png'

export default function Menu(){
  return(
    <S.MenuContainer>
      <S.NavContainer>
              <ul>
            <li>Explorar</li>
            <li>Cadastro</li>
            <li>Login</li>
        </ul>
        <Footer/>
      </S.NavContainer>
    </S.MenuContainer>
  )
}
