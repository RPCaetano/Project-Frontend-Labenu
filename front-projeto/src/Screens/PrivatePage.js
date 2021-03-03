import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header/Header';
import Profile from '../Components/Profile/Profile';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToAllCollection, goToCollection, goToCollectionDetail, goToCreateImage, goToExplorer, goToPrivatePage} from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from '../Styles/Explorer'

export default function PrivatePage() {
    const classes = useStyles();
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
       {/* <hr></hr>
       <h1>SEJA BEM VINDA : </h1>
       <Profile/> */}
       <S.ButtonGoCreate onClick={() => goToCreateImage(history)} >  Cadastrar imagem </S.ButtonGoCreate>
       <S.ButtonGoAllCollection onClick={() => goToAllCollection(history)} > Ver Todas </S.ButtonGoAllCollection>
       <S.Search>
       <Paper component="form" className={classes.root}>
        
      <InputBase
        className={classes.input}
        placeholder="Search" 
        //inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
   
    </Paper>
    </S.Search>
       <S.ContainerCollection> 
   
      {image &&
        image.map((item) => {
          return (
           
            <S.BoxContainerCollection>
         <p onClick={() => goToCollectionDetail(history)} > {item.collection} </p>
           </S.BoxContainerCollection>
          
        
          );
        
        })}
   
   
           
       
   </S.ContainerCollection> 
      
      
  
          </div>
        
    
  );
}