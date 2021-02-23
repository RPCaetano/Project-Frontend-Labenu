import React from 'react'
import * as S from '../styledGeral'
import email from '../../Assets/icons/email.png'
import facebook from '../../Assets/icons/facebook.png'
import instagram from '../../Assets/icons/instagram.png'
import twiter from '../../Assets/icons/twitter.png'



export default function Footer(){
    return (
        <S.FooterContainer>
            <S.RedesSociais>
                
           <p><img src={email} alt='email'></img></p>

          <p> <img src={instagram} alt='instagram'></img></p>
           
          <p><img src={facebook}alt='facebook'></img></p> 
           
          <p><img src={twiter} alt='twiter'></img></p>
           </S.RedesSociais>
        </S.FooterContainer>
        )
}