import React from 'react';
import styled from 'styled-components';
import { FaPlusCircle, FaArrowLeft} from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs"
import Link from 'next/link'

import Header from '../../src/components/Header/index';
import Input from '../../src/components/Input';

const Massas = () => {

const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  width: 0;
  margin: 10px 0 0 50px ;
  font-family: Montserrat;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: #2D0C57;

  .iconLeft {
      position: absolute;
      font-size: 20px;
      margin: 10px 0 0 -30px;
  }
`;

const ContainerCard = styled.div`
  max-width: 1200px;
  margin-top:50px;
  padding: 5px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
 
`;
const ItemCard = styled.div`
  width: 100%;
  height: auto;
  background:#FFFF;
  
  .iconPlus {
      position: absolute;
      width: 30px;
      padding: 10px;
      color: #0c4966;
      font-size: 30px;
      top: 620px;
      right: 10px;
  }
  @media (min-width: 481px) and (max-width: 850px) {
    
    .iconPlus {
      position: absolute;
      width: 30px;
      padding: 10px;
      color: #0c4966;
      font-size: 30px;
      top: 610px;
      right: 10px;
     
  }

}
`;
const ImageCard = styled.div`
  width: 100%;
  height: 260px;
  background: url('https://exame.com/wp-content/uploads/2018/04/thinkstockphotos-807218760.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  .descriptionCard {
    position: absolute;
    top: 295px;
    width: 100px;
    height:250px;
    background: #fafafa;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  }
  .iconWatch {
    font-size: 35px;
    margin: 20px 0 0 32px;
    color: rgba(58, 155, 240, 0.767);
  }
  .iconWatch h6 {
    font-size: 12px;
    font-weight: 900;
    margin: 0 0 0 0;
  }
  .iconWatch p {
    font-size: 10px;
    margin: 0 0 0 -8px;
  }
  

`;
const TextCard = styled.div`
text-align:center;
margin-top:250px;
padding: 30px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.91px;
text-transform: uppercase;
color: #0c4966;
`;
const PriceCard = styled.div`
  width: 0;
  font-family: 'Raleway', sans-serif;
  margin: -30px 0 0 150px;
  padding-bottom: 30px;
  color: #0c4966;
  font-size: 45px;
  
@media (min-width: 481px) and (max-width: 850px) {
  
    margin: -30px 0 0 280px;
  
}
@media (min-width: 320px) and (max-width: 480px) {
  
  margin: -30px 0 0 155px;
}

`;
const Span = styled.span`
    font-family: 'Raleway', sans-serif;
    color:#0c4966;
    font-size: 16px;
    margin: 150px 0 0 125px;

    @media (min-width: 481px) and (max-width: 850px) {
  
  margin: -30px 0 0 250px;

}


`;

    return (
        <>
          <Header />
          <Link href="./">  
          <Title> 
          <FaArrowLeft className="iconLeft" />
          Massas</Title>
          </Link>
          <Input />
          <ContainerCard>  
              <ImageCard>
              <ItemCard>
              <div className="descriptionCard">
                <div className="iconWatch">
                  <BsStopwatch/>
                  <h6>Tempo: </h6>
                  <p>20 minutos</p>
                </div>
              </div>
              <TextCard>Tagliatelle ao molho</TextCard>
              <Span>R$</Span>
              <PriceCard>15.50</PriceCard>
              <Link href="./massasItem">
               < FaPlusCircle className="iconPlus"/>
              </Link>
              </ItemCard>
              </ImageCard>
           </ContainerCard>
        </>

    )
}

export default Massas;