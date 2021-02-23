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

  const [showPassword, setShowPassword] = React.useState(false)
  
  const { form, onChange } = useForm({
    email: "",
    password: "",
  })
  
  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }
 
  const handleSubmit = (event) => {
    console.log('chamou a função')
    
   }

  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
      }
    }

    return (
      <>
       <Header/>
      
        <S.FormInputs onSubmit={handleSubmit}>
             <h1>Faça seu login</h1>
          <TextField
            value={form.email}
            onChange={handleInputChange}
            variant='outlined'
            label='E-mail'
            placeholder='email@email.com'
            name='email'
            type='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
            required
          />
          <br/>
          <TextField
            value={form.password}
            onChange={handleInputChange}
            variant= 'outlined'
            label='Senha'
            placeholder='Mínimo 6 caracteres'
            minlength="6"
            name='password'
            required
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
              showPassword ? (
                <VisibilityIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                /> ) : (
                <VisibilityOffIcon 
                  onClick={handleShowPassword} 
                  fontSize={'small'}
                />
                )
              ),
            }}
          />
          <br></br>
          <Button 
            variant='contained'
            color="primary"
            type="submit"
          >
            LOGIN
          </Button>
          <Button onClick={() => goToRegister(history)}
            color="primary"
                     > 
            Não possui cadastro? 
            Clique aqui.
           </Button>
            </S.FormInputs>
            </>
  );
}