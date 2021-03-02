import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header/Header';
import Profile from '../Components/Profile/Profile';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToCollectionDetail, goToExplorer, goToPrivatePage} from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'


export default function CollectionDetail() {
    const history = useHistory();
    const [image, setImage] = useState([]);
    
    useEffect(() => {
      getAllImage();
    }, []);
   
    const getAllImage =() => {
     
      axios
        .get(`${BaseUrl}/image/`,{
          headers: {
            Authorization: localStorage.getItem("token")
          },
        })
        .then((response) => {
          setImage(response.data.images)
          console.log(response.data.images)
         
        })
        .catch((er) => {
          console.log(er.response && er.response.data || er.message);
        });
    };

    return (
      <div>
       <Header/> 
       <hr></hr>
       <h1>SEJA BEM VINDA : </h1>
       <Profile/>
       <button onClick={() => goToPrivatePage(history)} >  Cadastrar imagem </button>
     
      <S.ContainerCollection>
     
      {image &&
        image.map((item) => {
         
          return (
            <S.BoxContainerCollection>
              <p>Coleção: {item.collection}<hr></hr>
              </p>
              <p>Autor: {item.author}
              </p>
              <p>Id_Image: {item.id}
              </p>
              <p>Subtitulo: {item.subtitle}
              </p>
              <p>Data: {item.date}
              </p>
              <p>Tags: {item.tags}
              </p>
              <p>Arquivo:{item.file}<hr></hr>
           </p>
          
           </S.BoxContainerCollection>
       
          );
        
        })}
   
        
           
   </S.ContainerCollection>   
      
      
   </div>
  
          
        
          
  );
}