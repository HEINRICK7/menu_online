import React from 'react'
import styled from 'styled-components'

import Input from '../src/components/Input';



const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  margin: 30px 0 0 20px ;
  font-family: Montserrat;
  font-size: 34px;
  line-height: 41px;
  /* identical to box height, or 121% */
  letter-spacing: 0.41px;
  

  /* Text Primary */

  color: #2D0C57;
`;

const ItemCard = styled.div`
  position: absolute;
  left: 4.83%;
  right: 52.42%;
  top: 28.46%;
  bottom: 47.99%;

  width: 177px;
  height: 200px;
  background: red;
  ;

border-radius: 8px;

`;

const Home = () => {
  return (
    <>
        <Title>Categorias</Title>
           <Input />
           <ItemCard />
        
    </>

  )}

export default Home;
