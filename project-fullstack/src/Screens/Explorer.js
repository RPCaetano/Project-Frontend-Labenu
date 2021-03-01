import React from 'react';
import { useForm } from '../Hooks/useForm';
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import * as S from '../Components/styledGeral';
import { goToRegister } from '../Routes/Cordinator';
import Header from '../Components/Header/Header';
import Menu from '../Components/Menu/Menu';
import borb1 from '../Assets/img/borb1.jpg';
import borb2 from '../Assets/img/borb2.jpg';
import borb3 from '../Assets/img/borb3.jpg';
import borb4 from '../Assets/img/borb4.jpg';
import borb5 from '../Assets/img/borb5.jpg';
import borb6 from '../Assets/img/borb6.jpg';
import borb7 from '../Assets/img/borb7.jpg';
import borb8 from '../Assets/img/borb8.jpg';
import borb9 from '../Assets/img/borb9.jpg';
import borb10 from '../Assets/img/borb10.jpg';
import borb11 from '../Assets/img/borb11.jpg';
import borb12 from '../Assets/img/borb12.jpg';
export default function Login() {
    const history = useHistory();

    return (
      <>
       <Header/>
      
       <S.H1>EXPLORANDO IMAGENS</S.H1>
        <S.Image>
        <p><img src ={borb1} alt ='logo'></img></p>
        <p><img src ={borb2} alt ='logo'></img></p>
        <p><img src ={borb3} alt ='logo'></img></p>
        <p> <img src ={borb4} alt ='logo'></img></p>
        <p><img src ={borb5} alt ='logo'></img></p>
        <p> <img src ={borb6} alt ='logo'></img></p>
        <p><img src ={borb7} alt ='logo'></img></p>
        <p><img src ={borb8} alt ='logo'></img></p>
        <p><img src ={borb9} alt ='logo'></img></p>
        <p><img src ={borb10} alt ='logo'></img></p>
        <p><img src ={borb11} alt ='logo'></img></p>
        <p><img src ={borb12} alt ='logo'></img></p>
     
        </S.Image>
      </>
  );
}