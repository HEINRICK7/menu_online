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
  margin-top:50px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;
const ItemCard = styled.div`
  width: 100%;
  height: auto;
  background:#0c4966;

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
margin-top:250px;
padding: 30px;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.91px;
text-transform: uppercase;
color: #FFFF;
`;
const PriceCard = styled.div`
  font-family: 'Raleway', sans-serif;
  margin: -30px 0 0 150px;
  padding-bottom: 30px;
  color: #FFFF;
  font-size: 45px;
  
@media (min-width: 481px) and (max-width: 850px) {
  
    margin: -30px 0 0 350px;
  
}

`;
const Span = styled.span`
    font-family: 'Raleway', sans-serif;
    color: #FFFF;
    font-size: 16px;
    margin: 150px 0 0 125px;

    @media (min-width: 481px) and (max-width: 850px) {
  
  margin: -30px 0 0 320px;

}


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
              <Span>R$</Span>
              <PriceCard>15.50</PriceCard>
              </ItemCard>
              </ImageCard>
           </ContainerCard>
        </>

    )
}

export default Massas;