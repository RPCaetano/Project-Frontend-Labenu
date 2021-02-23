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


export default function Login() {
    const history = useHistory();

    return (
      <>
       <Header/>
      
       <S.H1>EXPLORANDO IMAGENS</S.H1>
        
      </>
  );
}