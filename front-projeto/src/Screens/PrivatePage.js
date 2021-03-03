import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Header from '../Components/Header/Header';
import { BaseUrl } from '../Constants/BaseUrl';
import { goToCreateImage } from '../Routes/Cordinator';
import * as S from '../Styles/Explorer'


export default function PrivatePage() {
    const history = useHistory();
    const [image, setImage] = useState([]);
    

    useEffect(() => {
      getAllImage();
    }, []);

    const getDetailImg =(id)=>{

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
      
       <button onClick={() => goToCreateImage(history)} >  Cadastrar imagem </button>
     
      <S.ContainerCollection>
     
      {image &&
        image.map((item) => {
         
          return (
           <S.BoxContainerCollection>
                     
              <p onClick={()=> getDetailImg(item.id)}> {item.collection} </p>
           </S.BoxContainerCollection>
       
           );
   
        
        })}                  
   </S.ContainerCollection>   
          
   </div>
         
          
  );
}
















// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from "react-router-dom";
// import Header from '../Components/Header/Header';
// import Profile from '../Components/Profile/Profile';
// import { BaseUrl } from '../Constants/BaseUrl';
// import { goToAllCollection, goToCollection, goToCollectionDetail, goToCreateImage, goToExplorer, goToPrivatePage} from '../Routes/Cordinator';
// import * as S from '../Styles/Explorer'

// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import useStyles from '../Styles/Explorer'

// export default function PrivatePage() {
//     const classes = useStyles();
//     const history = useHistory();
//     const [image, setImage] = useState([]);
//     const [detail,setDetail] = useState({})
//     const pathParams = useParams();
//     const id = pathParams.id;

//     useEffect(() => {
//         getCollection();
//       }, []);
     
//       const getCollection =() => {
       
//         axios
//           .get(`${BaseUrl}/image`,{
//             headers: {
//               Authorization: localStorage.getItem("token")
//             },
//           })
//           .then((response) => {
//             setImage(response.data.images)
//             console.log(response.data.images)
//             //goToExplorer(history);
//           })
//           .catch((er) => {
//             console.log(er.response && er.response.data || er.message);
//           });
//       };

    

//     useEffect( ()=> {
//       getDetail()
//     },[])

//     const getDetail =()=>{

//       axios
//       .get(`${BaseUrl}/image/${id}`,{
//         headers: {
//           Authorization: localStorage.getItem("token")
//         },
//       })
//       .then((response) => {
//          setDetail(response.data.image)
       
//       })
//       .catch((er) => {
//         console.log(er.response && er.response.data || er.message);
//       });
//   }

//     return(
//       <div>
//       <Header/> 
  
//       <S.ButtonGoCreate onClick={() => goToCreateImage(history)} >  Cadastrar imagem </S.ButtonGoCreate>
//       <S.ButtonGoAllCollection onClick={() => goToAllCollection(history)} > Ver Todas </S.ButtonGoAllCollection>
    
//    {/* </div><S.ContainerCollection>  */}
// {/*    
//     <S.BoxContainerCollectionDetail> 
//      <p>DETALHES DA IMAGEM </p>
//     <hr></hr> 
//             <p><strong>Coleção:</strong> {detail.collection}</p>
//             <p><strong>Autor:</strong>  {detail.author}    </p>
//             <p><strong>Id_Image:</strong>  {detail.id}
//             </p>
//             <p><strong>Subtitulo:</strong>  {detail.subtitle}
//             </p>
//             <p><strong>Data:</strong> {detail.date}
//             </p>
//             <p><strong>Tags:</strong>  {detail.tags}
//             </p>
//             </S.BoxContainerCollectionDetail>
//       </S.ContainerCollection> 
//     */}

 
//        <S.ContainerCollection> 
   
//       {image &&
//         image.map((item) => {
//           return (
//             // onClick={() => goToCollectionDetail(history)}
//             <S.BoxContainerCollection >
//          <p onClick={()=> getDetail(item.id)} > {item.collection} </p>
//            </S.BoxContainerCollection>
          
         
//           );
   
        
//         })}                  
//    </S.ContainerCollection>   
          
// </div>
         
          
//   );
// }