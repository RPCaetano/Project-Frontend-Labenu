import axios from "axios";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { BaseUrl } from "../Constants/BaseUrl";
import { goToAllCollection } from "../Routes/Cordinator";
import AllCollection from '../Screens/AllCollection'
import setImage from '../Screens/AllCollection'


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
        goToAllCollection(history);
      })
      .catch((er) => {
        console.log(er.response && er.response.data || er.message);
      });
  };