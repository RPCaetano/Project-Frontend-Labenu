import styled from 'styled-components'



//IMG LOGO

export const LogoImg = styled.div`
margin-left:3px;
img{
  width:250px;
  }
`

// HEADER

export const HeaderContainer = styled.header`
height:100px;
width:100vw;
background-color:#26418f;
`

//MENU 
export const NavContainer = styled.nav`
ul{
  padding:5px 10px;
        width:100%;
    li{
      
        padding:10px 0px;
        width:100%;
        display:block;
        border-bottom:1px solid #f8fdff;
        color:#f8fdff;
        cursor: pointer;
        &:last-child{
            border:none;
        }
        & :hover{
          background-color:#aab6fe;
        }
         }
        }`



export const MenuContainer =styled.div`
height:100vh;
width:250px;
background:#26418f;
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

export const FormInputs = styled.form`
display: flex;
flex-direction: column;
height: 20vh;
width: 335px;
justify-content: space-around;
margin-top: 15%;
margin-left: 48%;
margin-bottom: 5%;
`;
export const H1 = styled.h1`
text-align:center;
color:#26418f;
margin-left:20%;
`

export const TextAbout= styled.div`
display:flex;
flex-direction: column;
text-align:justify;
margin-left:25%;
margin-right:3%;
margin-top:5%;
`

export const Image= styled.div`
display:flex;
flex-wrap:wrap;
flex-direction: row;
margin-left:30%;
p{
  padding:10px;
}
img{
  width:150px;
  height:100px;
}
`


