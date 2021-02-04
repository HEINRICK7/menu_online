import React from 'react';
import styled from 'styled-components';

import Header from '../../src/components/Header/index';
import Input from '../../src/components/Input';

const Massas = () => {

const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  margin: 10px 0 0 20px ;
  font-family: Montserrat;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: #2D0C57;
`;

const ContainerCard = styled.div`
  max-width: 1200px;
  margin:50px 0 0 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;
const ItemCard = styled.div`
  width: 100%;
  height: 130px;
  background:#0c4966;
  border-radius: 30px 30px 8px 8px;

`;
const ImageCard = styled.div`
  width: 100%;
  height: 260px;
  background: url('https://exame.com/wp-content/uploads/2018/04/thinkstockphotos-807218760.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

`;
const TextCard = styled.div`
text-align:center;
margin:250px 0 0 0;
padding: 30px;
font-family: 'Oxygen', sans-serif;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.91px;
text-transform: uppercase;
color: #FFFF;
`;
const PriceCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

  color: #FFFF;
  text-align:center;
  font-size: 35px;
  font-family: Montserrat;

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

    return (
        <>
          <Header />
          <Title>Massas</Title>
          <Input />
          <ContainerCard>  
              <ImageCard>
              <ItemCard>
              <TextCard>Tagliatelle ao molho</TextCard>
              <PriceCard>R$ 15.50</PriceCard>
              </ItemCard>
              </ImageCard>
           </ContainerCard>
        </>

    )
}

export default Massas;