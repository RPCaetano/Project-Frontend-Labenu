import axios from "axios";
import { BaseUrl } from '../Constants/BaseUrl';
import { goToAllCollection} from "../Routes/Cordinator";

export const register = (body, history,setRightButtonText) => {
  axios
  .post(`${BaseUrl}/users/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token);
    
    goToAllCollection(history);
    setRightButtonText("Logout")
  })
  .catch((er) => {
    alert("Username ja cadastrado(");
    console.log(er.response && er.response.data || er.message)
  });
};


export const login = (body, history,setRightButtonText) => {
    axios
      .post(`${BaseUrl}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      
        goToAllCollection(history);
        setRightButtonText("Logout")
      })
      .catch((err) => {
        alert("Email ou senha inválidos :(");
        console.log('err.mensage');
      });
  };
  
     
   

