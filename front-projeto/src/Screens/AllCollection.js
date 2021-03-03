import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header/Header';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToCreateImage } from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'


export default function AllCollection() {
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
       {/* <hr></hr>
       <h1>SEJA BEM VINDA : </h1>
       <Profile/> */}
       <button onClick={() => goToCreateImage(history)} >  Cadastrar imagem </button>
     
      <S.ContainerCollection>
     
      {image &&
        image.map((item) => {
         
          return (
           
            <S.BoxContainerCollectionDetail>
           
              <p><strong>Coleção:</strong> {item.collection}<hr></hr> </p>
              <p><strong>Autor:</strong>  {item.author}    </p>
              <p><strong>Id_Image:</strong>  {item.id}
              </p>
              <p><strong>Subtitulo:</strong>  {item.subtitle}
              </p>
              <p><strong>Data:</strong> {item.date}
              </p>
              <p><strong>Tags:</strong>  {item.tags}
              </p>
              <p><strong>Arquivo:</strong> </p><img src ={item.file}/>
          
           </S.BoxContainerCollectionDetail>
       
          );
        
        })}                  
   </S.ContainerCollection>   
          
   </div>
         
          
  );
}