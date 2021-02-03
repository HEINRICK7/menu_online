import React from 'react'
import styled from 'styled-components'

import Input from '../src/components/Input';

import {HeaderWrap} from '../src/components/Header/headerWrap';


const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  margin: 30px 0 0 20px ;
  font-family: Montserrat;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height, or 121% */
  letter-spacing: 0.41px;
  

  /* Text Primary */

  color: #2D0C57;
`;
const ContainerCard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;

const ItemCard = styled.div`
  position: absolute;
  top: 355px;
  bottom: 30px;
  left: 8px;
  width: 47%;
  height: 211px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ItemCard2 = styled.div`
  position: absolute;
  top: 355px;
  bottom: 30px;
  right: 8px;
  width: 47%;
  height: 211px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const ImageCard = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 33.65%;
  background: url('https://exame.com/wp-content/uploads/2018/04/thinkstockphotos-807218760.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  border-radius: 8px 8px 0px 0px;

`;
const ImageCard2 = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 33.65%;
  background: url('http://s2.glbimg.com/Ql8LnQXB7_i4-WNae2YNPOyz2jUK7wOW3-kWLt8Lk4uJlvjxcpMQWpLj-cL1WRqp/e.glbimg.com/og/ed/f/original/2013/09/24/mg_4634.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  border-radius: 8px 8px 0px 0px;

`;

const TextCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');

  position: absolute;
  left: 9.04%;
  right: 9.04%;
  top: 71.09%;
  bottom: 19.43%;

  font-family: Montserrat;
  font-style: normal;
  font-size: 16px;
  line-height: 21px;

`;

const QuantityCard = styled.div`
  position: absolute;
  left: 9.04%;
  right: 78.53%;
  top: 85.31%;
  bottom: 8.06%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #9586A8;
`;


const Home = () => {
  return (
    <>
        <HeaderWrap><h1>Logo</h1></HeaderWrap>
        <Title>Categorias</Title>
           <Input />
           <ContainerCard>
           <ItemCard>
            <ImageCard />
            <TextCard>Massas</TextCard>
            <QuantityCard>(53)</QuantityCard>
           </ItemCard>

           <ItemCard2>
            <ImageCard2 />
            <TextCard>Frutos do Mar</TextCard>
            <QuantityCard>(21)</QuantityCard>
           </ItemCard2>
           </ContainerCard>
        
    </>

  )}

export default Home;
