import styled from 'styled-components'
//IMG LOGO

export const LogoImg = styled.div`
margin-left:60px;
img{
  width:96px;
  
}
`

// HEADER

export const HeaderContainer = styled.header`
height:100px;
width:100vw;
background-color:#f44336;

`

//MENU 

export const NavContainer = styled.nav`
ul{
    li{
        padding:20px 0;
        width:100%;
        display:block;
        border-bottom:1px solid #ffcdd2;
        color:#ef5350;
        &:last-child{
            border:none;
        }
         }
        
}`



export const MenuContainer =styled.div`
height:100vh;
width:250px;
background:#ffebee;
padding:20px;

`

//FOOTER
export const FooterContainer = styled.footer`

position:absolute;
bottom:0px;
width:100%;
`
export const RedesSociais = styled.div`
display:flex;
margin-left:50px;

p{
    padding:5px;
}
img{
  width:20px;
  
}

` 

