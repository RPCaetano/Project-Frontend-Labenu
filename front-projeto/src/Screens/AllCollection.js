import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Header from '../Components/Header/Header';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToAllCollection, goToCreateImage } from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'


export default function AllCollection() {
    const history = useHistory();
    const [image, setImage] = useState([]);
    

    useEffect(() => {
      getAllImage();
    }, []);

    const getDetail =(id)=>{

        axios
        .get(`${BaseUrl}/image/${id}`,{
          headers: {
            Authorization: localStorage.getItem("token")
          },
        })
        .then((response) => {
            history.push(`/image/${id}`)
         
        })
        .catch((er) => {
          console.log(er.response && er.response.data || er.message);
        });


    }
   
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
       <S.ButtonGoCreate onClick={() => goToCreateImage(history)} >  Cadastrar imagem </S.ButtonGoCreate>
        {/* <S.ButtonGoAllCollection onClick={() => goToAllCollection(history)} > Ver Todas </S.ButtonGoAllCollection> */}
     
      <S.ContainerCollection>
     
      {image &&
        image.map((item) => {
         
          return (
            <S.BoxContainerCollectionDetail>
           
              <img src={item.file}/> 
              
              <S.ButtonDetail onClick={()=> getDetail(item.id)}>Ver Detalhes</S.ButtonDetail>
           </S.BoxContainerCollectionDetail>
       
           );
   
        
        })}                  
   </S.ContainerCollection>   
          
   </div>
         
          
  );
}