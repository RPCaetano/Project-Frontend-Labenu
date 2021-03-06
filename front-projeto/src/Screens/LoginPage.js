import React from 'react';
import { useForm } from '../Hooks/useForm';
import { TextField } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { useHistory } from "react-router-dom";
import * as S from '../Styles/Inputs';
import { goToRegister } from '../Routes/Cordinator';
import Header from '../Components/Header/Header';
import { useUnprotectPage } from '../Hooks/useUnprotectPage';
import { login } from '../Services/User';


const LoginPage = ({setRightButtonText}) => {
     useUnprotectPage();
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
    event.preventDefault();
        login(form,history,setRightButtonText)
    
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
     
      
        <S.FormInputs onSubmit={handleSubmit} setRightButtonText={setRightButtonText}>
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
            color='primary'
          />
          <br/>
          <TextField
            color= 'primary'
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
          
          <S.ButtonLogin > LOGIN</S.ButtonLogin>
           
      
          <S.ButtonNoRegister onClick={() => goToRegister(history)} >   
                  
            Não possui cadastro? 
            Clique aqui.
           </S.ButtonNoRegister>
            </S.FormInputs>
            </>
  );
}
export default LoginPage