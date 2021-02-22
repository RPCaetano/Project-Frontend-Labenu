import React from 'react'
import * as S from '../styledGeral'

export default function Menu(){
  return(
    <S.MenuContainer>
      <S.NavContainer>
        <ul>
            <li>Explorar</li>
            <li>Cadastro</li>
            <li>Login</li>
        </ul>
      </S.NavContainer>
    </S.MenuContainer>
  )
}
