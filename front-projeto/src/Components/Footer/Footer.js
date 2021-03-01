import React from 'react'
import * as S from '../../Styles/Footer'


export default function Footer(){
    return (
        <S.FooterContainer>
            <S.RedesSociais>
                
           <p><img src="/icons/email.png" alt='email'></img></p>

          <p> <img src="/icons/instagram.png"alt='instagram'></img></p>
           
          <p><img src="/icons/facebook.png"alt='facebook'></img></p> 
           
          <p><img src="/icons/twitter.png" alt='twiter'></img></p>
           </S.RedesSociais>
        </S.FooterContainer>
        )
}