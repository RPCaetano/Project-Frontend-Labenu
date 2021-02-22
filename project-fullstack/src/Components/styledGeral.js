import styled from 'styled-components'

// HEADER

export const HeaderContainer = styled.header`
height:80px;
width:100%;
background-color:blueviolet;
`

//MENU 

export const NavContainer = styled.nav`
ul{
    li{
        padding:10px 0;
        width:100%;
        display:block;
        border-bottom:1px solid #666;
        &:last-child{
            border:none;
        }
         }
}`

export const MenuContainer =styled.div`
height:100vh;
width:250px;
background:#ccc;
padding:20px;
`
