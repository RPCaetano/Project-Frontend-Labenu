import axios from "axios";
import { BaseUrl } from '../Constants/BaseUrl';
import { goToCollection, goToExplorer, goToLoginPage, goToPrivatePage } from "../Routes/Cordinator";
import {Explorer} from '../Screens/AllCollection'

export const register = (body, history) => {
  axios
  .post(`${BaseUrl}/users/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token);
    goToPrivatePage(history);
  })
  .catch((er) => {
    alert("Username ja cadastrado(");
    console.log(er.response && er.response.data || er.message)
  });
};


export const login = (body, history) => {
    axios
      .post(`${BaseUrl}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToPrivatePage(history);
      })
      .catch((err) => {
        alert("Email ou senha inválidos :(");
        console.log('err.mensage');
      });
  };
  
      export const createImage = (body, history) => {
      const token = localStorage.getItem("token");
      axios
        .post(`${BaseUrl}/image/registry`, body, {
          headers: {
            Authorization: token,
          },
        })
        .then(() => {
          alert("Imagem criada com sucesso");
          goToCollection(history);
        })
        .catch((er) => {
          console.log(er.response && er.response.data || er.message);
        });
    };

   

