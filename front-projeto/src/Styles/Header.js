import styled from 'styled-components'

export const HeaderContainer = styled.header`
display:flex;
flex-direction:row;
margin-top:1rem;

height:100px;
width:100vw;
background-color:var(--background);
h1{
   
    padding-top:1rem;
    color:var(--title);
    font-size:4rem;
}
img{
    width:150px;
}
div{
    margin-top:15px;
    margin-left:150px;
}

`
export const NavContainer = styled.nav`
ul{
    
        padding:10px 10px;
        width:100%;
    li{
      
        padding:10px 0px;
        width:100%;
        display:block;
       
        color:var(--text);
        cursor: pointer;
        &:last-child{
            border:none;
        }
        & :hover{
          background-color:var(--yellow);
        }
         }
         a{
            border-radius:10px;
             padding:10px;
             margin-left:200px;
         }
        
        }`

export const MenuContainer =styled.div`
display:flex;
background:var(--background);
padding:10px;
`


/* input{
border: 1px solid gray ;
border-radius: 5px;
height:25px;
width:450px;
position: absolute;
z-index:0;
}
img{
z-index:1;
height:15px;
width:15px;
margin-top:2px;
margin-left:430px;
position: absolute;
} */

