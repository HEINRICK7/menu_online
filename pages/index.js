import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from 'next/link'

import axios from 'axios';

import { FiSearch } from "react-icons/fi";

import { FaArrowRight } from "react-icons/fa";

import Input from '../src/components/Input';

import Header from '../src/components/Header/index';


const Title = styled.div`
  margin: 10px 0 0 20px ;
  font-family: 'Lato';
  font-size: 28px;
  line-height: 41px;
  /* identical to box height, or 121% */
  letter-spacing: 0.41px;
  

  /* Text Primary */

  color: #2D0C57;
`;
const ContainerCard = styled.div`
  max-width: 1200px;
  margin-top:50px;
  padding: 20px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;

const ItemCard = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  border-radius: 8px;

  .iconRight {
    position: absolute;
    top: 370px;
    right: 10px;
  }
`;

const TextCard = styled.div`
  position: absolute;
  left: 9.04%;
  right: 9.04%;
  top: 82%;
  bottom: 19.43%;

  font-family: 'Lato';
  font-style: normal;
  font-size: 16px;
  line-height: 21px;

`;

const QuantityCard = styled.div`
  position: absolute;
  left: 9.04%;
  right: 78.53%;
  top: 90%;
  bottom: 8.06%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #9586A8;
`;

const Home = () => {
  const [categoria, setCategoria] = useState([])

  const router = useRouter();
  
  useEffect(() => {
    axios.get('http://localhost:1337/categorias').then(response => {
    setCategoria(response.data)  
    console.log(response.data[0]);
});

  }, [])
  return (
    <>
        <Header/>
        <Title>Categorias</Title>
           <Input>
           <FiSearch />
           </Input>
           <ContainerCard>
            
             {categoria.map(result => {
               return (
                <ItemCard >
                  <img style={{width: '100%', height: '80%' }} src={`http://localhost:1337${result.image_categoria.url}`} alt="new"/>
                 
                <TextCard>{result.name_categoria}</TextCard>
                <QuantityCard>{result.id}</QuantityCard>
                < FaArrowRight className="iconRight"/>
              </ItemCard>
               )})}
           </ContainerCard>
        
    </>

  )}

export default Home;
