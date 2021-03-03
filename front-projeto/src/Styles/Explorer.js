import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';

export const BoxContainerCollectionDetail = styled.div`

    //width:350px;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 0 20px black;
    padding:1.5rem 3rem;
    margin: 5px;
     
    display: flex;
    flex-direction: column;
    justify-content:center ;
    text-align: center;
    max-width:100%;
    img{
           max-width:300px;
         
          
       }
     p{
       text-align:justify;
       strong{
       color:black

       }}`
    
    export const ContainerCollection = styled.div`

    display:flex;
    flex-wrap:wrap;
    margin:20px;
     
   `

// export const BoxContainerExplorer = styled.div`

// width:350px;
// height: 100%;
// border-radius: 5px;
// box-shadow: 0 0 20px black;
// padding:1.5rem 3rem;
// margin: 5px;
// margin-left:35%;

// display: flex;
// flex-direction: column;
// justify-content:center ;
// text-align: center;
// max-width:100%;
// text-decoration:none;
// cursor: pointer;
// & hover{
//      background-color:red;
// }


export const BoxContainerCollection = styled.div`
width:200px;
height: 100%;
border-radius: 5px;
box-shadow: 0 0 20px black;
padding:1.5rem 3rem;
margin: 5px;


display: flex;
flex-wrap:wrap;
flex-direction: row;
justify-content:center ;
text-align: center;
max-width:100%;

cursor: pointer;
 :hover{
     background-color:var(--yellow);
     p{
          cursor: pointer;
          background-color:var(--yellow);
     }
}
     
    `
    export const Search =styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:20px ;
`    

    
const useStyles = makeStyles((theme) => ({
     root: {
       
       display: 'flex',
       alignItems: 'center',
       width: 300,
     },
     input: {
       marginLeft: theme.spacing(1),
       flex: 1,
    
     },
     iconButton: {
       padding: 5,
     },
   
   
   })); 
   export default useStyles;

   export const ButtonGoCreate =styled.button`
   width:141px;
   border: 0.5px solid grey ;
   border-radius:5px;
   margin-left:20px;
   padding:5px;
   :hover{
     background-color:var(--yellow);
   }
   `
  export const ButtonGoAllCollection=styled.button`
      width:141px;
   border: 0.5px solid grey ;
   border-radius:5px;
   margin-left:20px;
   padding:5px;
     :hover{
     background-color:var(--yellow);
   }
  `

export const ButtonBack=styled.button`
width:141px;
border: 0.5px solid grey ;
border-radius:5px;
margin-left:20px;
padding:5px;
:hover{
background-color:var(--yellow);
}
`