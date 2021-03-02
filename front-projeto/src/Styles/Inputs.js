import styled from 'styled-components'

export const FormInputs = styled.form`
display: flex;
flex-direction: column;
height: 20vh;
width: 335px;
margin-left:35%;
color:#FFB90F;



h1{
    margin:3%;
    font-size:20px;
    text-align:justify;
}
`
export const ButtonLogin = styled.button`
color:var(--text);
border-radius:5px;
text-decoration:none;

& :hover{
    background-color:var(--yellow);
} 
`

export const ButtonNoRegister = styled.span`
color:var(--red);
cursor:pointer;
`
export const ButtonRegister = styled.button`
color:var(--text);
border-radius:5px;
`
export const ButtonBack = styled.button`
color:var(--text);
border-radius:5px;
`