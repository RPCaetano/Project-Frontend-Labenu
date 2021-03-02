import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header/Header';
import Profile from '../Components/Profile/Profile';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToCollectionDetail, goToExplorer, goToPrivatePage} from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'


export default function Explorer() {
    const history = useHistory();
    const [image, setImage] = useState([]);
    
    useEffect(() => {
      getAllImage();
    }, []);
   
    const getAllImage =() => {
     
      axios
        .get(`${BaseUrl}/image`,{
          headers: {
            Authorization: localStorage.getItem("token")
          },
        })
        .then((response) => {
          setImage(response.data.images)
          console.log(response.data.images)
          //goToExplorer(history);
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
           <S.BoxContainerCollection>
     
      {image &&
        image.map((item) => {
          return (
            
            
         <p onClick={() => goToCollectionDetail(history)} > {item.collection}<hr></hr>
           </p>
          );
        
        })}
   
        
           
        </S.BoxContainerCollection>
        
      
      
  
          </div>
        
    
  );
}