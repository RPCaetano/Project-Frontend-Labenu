import React from 'react';
import {useHistory}from 'react-router-dom';
import Header from '../Components/Header/Header';
import { useProtectPage } from '../Hooks/useProtectPage';
import { goToHome } from '../Routes/Cordinator';
import * as S from '../Styles/Inputs';
import { TextField } from '@material-ui/core'
import { createImage } from '../Services/User';
import { useForm } from '../Hooks/useForm';


export default function PrivatePage() {
  const history=useHistory();
  
  const {form, onChange} = useForm({subtitle:"",author: "",tags: "",file: "",collection: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createImage(form, history)
    }
  return (
    <>
     <Header/>
     <div>
       Dados Usuario
     </div>
     
      <S.FormInputs onSubmit={handleSubmit} >
             <h1>Cadastrar imagens</h1>
          <TextField
          
           value={form.subtitle}
            onChange={handleInputChange}
           variant='outlined'
            label='subtitle'
            placeholder='subtitle'
            name='subtitle'
            type='text'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'
            required
            color='primary'
          />
          <br/>
          <TextField
            color= 'primary'
            value={form.author}
            onChange={handleInputChange}
            variant= 'outlined'
            label='author'
            placeholder='author'
            name='author'
            required
                                
            />
             <br/>
          <TextField
            color= 'primary'
          value={form.tags}
           onChange={handleInputChange}
           variant= 'outlined'
           label='tags'
            placeholder='tags'
            name='tags'
            required
                                
            />
             <br/>
          <TextField
            color= 'primary'
            value={form.file}
            onChange={handleInputChange}
            variant= 'outlined'
            label='file'
            placeholder='file'
            name='file'
            required
                                            
            />
             <br/>
          <TextField
            color= 'primary'
            value={form.collection}
            onChange={handleInputChange}
            variant= 'outlined'
            label='collection'
            placeholder='collection'
            name='collection'
            required
                                
            />
          <br></br>
          
          <S.ButtonLogin > Enviar imagem</S.ButtonLogin>

    </S.FormInputs>
  </>
   
);
}

