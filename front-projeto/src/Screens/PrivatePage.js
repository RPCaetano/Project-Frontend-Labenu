import React from 'react';
import {useHistory}from 'react-router-dom';
import { goToHome } from '../Routes/Cordinator';

function PrivatePage() {
  const history=useHistory();
  return ( 
         <div>

             OLA SOU A PRIVATE PAGE
             <button onClick={()=>goToHome(history)}>Voltar</button>
         </div>

  )
}

export default PrivatePage;