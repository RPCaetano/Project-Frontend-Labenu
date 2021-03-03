import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Header from '../Components/Header/Header';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToAllCollection, goToCreateImage, goToPrivatePage } from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'



export default function CollectionDetailImage() {
    const history = useHistory();
      const [detailImg,setDetailImg] = useState({})
      const pathParams = useParams();
      const id = pathParams.id;
  
      useEffect( ()=> {
        getViewDetailImage()
      },[])
  
  const getViewDetailImage =()=>{

        axios
        .get(`${BaseUrl}/image/${id}`,{
          headers: {
            Authorization: localStorage.getItem("token")
          },
        })
        .then((response) => {
           setDetailImg(response.data.image)
         
        })
        .catch((er) => {
          console.log(er.response && er.response.data || er.message);
        });
    }

      return(
        <div>
        <Header/> 
    
        <S.ButtonGoCreate onClick={() => goToCreateImage(history)} >  Cadastrar imagem </S.ButtonGoCreate>
        <S.ButtonGoAllCollection onClick={() => goToAllCollection(history)} > Ver Todas </S.ButtonGoAllCollection>
        <S.ButtonBack onClick={() => goToPrivatePage(history)} > Voltar </S.ButtonBack>

        <S.ContainerCollection> 
     
      <S.BoxContainerCollectionDetail>
      <p>DETALHES DA IMAGEM </p>
      <hr></hr> 
              <img src = {detailImg.file}/>
     
              </S.BoxContainerCollectionDetail>
        </S.ContainerCollection> 
        </div>

     
       
  );
}