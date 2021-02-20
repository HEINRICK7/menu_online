import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';


import axios from 'axios';

import { FaArrowLeft } from "react-icons/fa";
import { BsStopwatch, BsPlusCircle, BsSearch } from "react-icons/bs";
import { IoRestaurantOutline } from "react-icons/io5";

import Link from '../../src/components/Link';

import Header from '../../src/components/Header/index';
import Input from '../../src/components/Input';

const Massas = () => {

  const [produto, setProduto ] = useState([])
  const router = useRouter();
  
  useEffect(() => {
    axios.get('https://app-menu-online.herokuapp.com/produtos', {
      header:('Content-Type: application/json'),
    }).then(response => {
    setProduto(response.data);
    console.log(response.data)
});

  }, [])
const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  width: 0;
  margin: 10px 0 0 50px ;
  font-family: Montserrat;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: #FFFF;

  .iconLeft {
      position: absolute;
      font-size: 20px;
      margin: 10px 0 0 -30px;
      color: #FFFF;
  }
`;

const ContainerCard = styled.div`
  margin-top:50px;
  padding: 5px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
 
`;
const ItemCard = styled.div`
  width: auto;
  height: 450px;
  background: #fcb045;

`;
const Image = styled.img`
  width: 100%;
  height: 260px;
`;
const ImageCard = styled.div`
  margin: -265px 0 0 0;
`;

const CardLeft = styled.div`
  .descriptionCard {
    position: relative;
    top: -5px;
    padding-top: 5px;
    width: 80px;
    height:255px;
    background: rgba(255, 255, 255, 0.938);
  }
  .iconWatch {
    margin: 0px 0 0 20px;
    font-size: 35px;
    color: rgba(58, 155, 240, 0.767);
  }
  .iconWatch h6 {
    font-size: 12px;
    font-weight: 900;
    margin:0 0 0 0;
  }
  .iconWatch p {
    font-size: 10px;
    margin: 0 0 0 -8px;
  }
  .iconRestaurant {
    margin: 35px 0 0 20px;
    font-size: 35px;
    color: rgba(58, 155, 240, 0.767);
  }
  .iconRestaurant h6 {
    font-size: 12px;
    font-weight: 900;
    margin: 0 0 0 0;
  }
  .iconRestaurant p {
    font-size: 10px;
    margin: 0 0 0 -8px;
  }
  .iconPlus {
    margin: 30px 0 0 20px;
    font-size: 32px;
    color: rgba(58, 155, 240, 0.767);
  }
  .iconPlus p {
    font-size: 10px;
    margin: -7px 0 0 5px;
  }
  
`;
const TextCard = styled.div`
text-align:center;
margin-top:0px;
padding: 30px;
font-family: Lato;
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
  padding-bottom: 30px;
  color: #0c4966;
  font-size: 45px;

@media (min-width: 320px){ 
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
  margin: -30px 0 0 145px;
  };

@media screen and (min-width: 450px) {
  
  margin: -30px 0 0 280px;
}

@media screen and (min-width: 700px) {
  
  margin: -30px 0 0 370px;
}
`;
const Span = styled.span`
  font-family: 'Raleway', sans-serif;
  color:#0c4966;
  font-size: 16px;
  margin: 150px 0 0 115px;
  
  @media (min-width:480px) { 
  
    margin: -30px 0 0 245px;

  }
`;
const CodCard = styled.div`

  margin-top:-30px;
  margin-bottom: 30px;
  color:#0c4966;
  text-align: center;
  font-family: 'Lato';
  font-style: normal;


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
          {produto.map(result => (
             <ItemCard> 
              <CardLeft>
              <div className="descriptionCard"> 
            
                <div className="iconWatch">
                  <BsStopwatch/>
                  <h6>Tempo: </h6>
                  <p>{result.tempo}</p>
                </div>
               
                <div className="iconRestaurant">
                  <IoRestaurantOutline/>
                  <h6>Serve: </h6>
                  <p>{result.serve}</p>
                </div>
                <Link href="./massasItem">
                <div className="iconPlus">
                      < BsPlusCircle />
                      <p>mais..</p> 
                  </div>
                  </Link>
                 
              </div>
              </CardLeft>
              <ImageCard>
                <Image src={result.imagem_produto.name} alt="new"/> 
              </ImageCard>
              <TextCard>{result.nome_produto}</TextCard>
              <CodCard>({(result.id).replace(/[^\d]+/g,'').slice(0, 8)})</CodCard>
              <Span>R$</Span>
              <PriceCard>{(result.preco).toFixed(2)}</PriceCard>

              </ItemCard>
               ))}
           </ContainerCard>
        </>

    )
}

export default Massas;