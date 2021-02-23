import React from 'react'
import { TextField, Button } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as S from '../Components/styledGeral'
import { useForm } from '../Hooks/useForm'

export default function Register() {
    const [showPassword, setShowPassword] = React.useState(false)
  
    const {form, onChange} = useForm({
      name: "",
      nickname: "",
      email: "",
      password: ""
    })
     
   
  
    const handleInputChange = (event) => {
      const {value, name} = event.target
  
      onChange(value, name)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      
   
    }
  
    
    const handleShowPassword = () => {
      if (showPassword) {
        setShowPassword(false)
      } else {
        setShowPassword(true)
        }
      }
    return (
        <div>
        <S.FormInputs onSubmit={handleSubmit}>
            <TextField 
            value={form.name} 
            onChange={handleInputChange}
            variant='outlined'
            label='Nome'
            placeholder='Nome e sobrenome'
            name='name'
            type='text'
            required
            size="small"
          />
          <br />
          <TextField 
            value={form.nickname}
            onChange={handleInputChange}
            variant='outlined'
            label='Nickname'
            placeholder='nickname'
            name='nickname'
            type='text'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
            required
            size="small"
          />
          <br />
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
            size="small"
          />
          <br />
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
            size="small"
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
          <br/>
          <TextField 
            value={form.password}
            onChange={handleInputChange}
            variant= 'outlined'
            label='Confirmar'
            placeholder='Confirme a senha anterior'
            minlength="6"
            name='password'
            size="small"
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
            required
          />
          <br/>
          <Button
            variant='contained'
            color="primary"
            type="submit"
          >
            CRIAR
          </Button>
        </S.FormInputs>
      </div>
    );
  }