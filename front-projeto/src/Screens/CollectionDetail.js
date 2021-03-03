import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Header from '../Components/Header/Header';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToAllCollection, goToCreateImage, goToPrivatePage } from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'



export default function CollectionDetail() {
    const history = useHistory();
      const [detail,setDetail] = useState({})
      const pathParams = useParams();
      const id = pathParams.id;
  
      useEffect( ()=> {
        getViewDetail()
      },[])
  
  const getViewDetail =()=>{

        axios
        .get(`${BaseUrl}/image/${id}`,{
          headers: {
            Authorization: localStorage.getItem("token")
          },
        })
        .then((response) => {
           setDetail(response.data.image)
         
        })
        .catch((er) => {
          console.log(er.response && er.response.data || er.message);
        });
    }

      return(
        <div>
        <Header/> 
    
        <S.ButtonGoCreate onClick={() => goToCreateImage(history)} >  Cadastrar imagem </S.ButtonGoCreate>
        {/* <S.ButtonGoAllCollection onClick={() => goToAllCollection(history)} > Ver Todas </S.ButtonGoAllCollection> */}
        <S.ButtonBack onClick={() => goToAllCollection(history)} > Voltar </S.ButtonBack>

        <S.ContainerCollection> 
     
      <S.BoxContainerCollectionDetail>
      <p>DETALHES DA IMAGEM </p>
      <hr></hr> 
              <p><strong>Coleção:</strong> {detail.collection}</p>
              <p><strong>Autor:</strong>  {detail.author}    </p>
              <p><strong>Id_Image:</strong>  {detail.id}
              </p>
              <p><strong>Subtitulo:</strong>  {detail.subtitle}
              </p>
              <p><strong>Data:</strong> {detail.date}
              </p>
              <p><strong>Tags:</strong>  {detail.tags}
              </p>
              </S.BoxContainerCollectionDetail>
        </S.ContainerCollection> 
        </div>

     
       
  );
}