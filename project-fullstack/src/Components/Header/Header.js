import React from 'react'
import * as S from '../styledGeral'
import logo from '../../Assets/img/logo.png'
import Menu from '../Menu/Menu'

export default function Header(){
    return (
        <S.HeaderContainer>
            <Menu/>
        </S.HeaderContainer>
        )
}