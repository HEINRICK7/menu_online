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
  margin-top:50px;
  padding: 20px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;

const ItemCard = styled.div`
  width: auto;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  margin-bottom: 25px;
  border-radius: 8px;

  .iconRight {
    margin: -20px 10px 0 0;
    float: right;
  }
`;

const TextCard = styled.div`
  margin: 2px 0 0 10px;

  font-family: 'Lato';
  font-style: normal;
  font-size: 16px;
  line-height: 21px;

`;

const QuantityCard = styled.div`
  margin: 0 0 0 25px;
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
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
                  <img style={{width: '100%', height: '80%', borderRadius: '8px 8px 30px 30px' }} src={`http://localhost:1337${result.image_categoria.url}`} alt="new"/>
                 
                <TextCard>{result.name_categoria}</TextCard>
                <QuantityCard>{result.id}</QuantityCard>
                < FaArrowRight className="iconRight"/>
              </ItemCard>
               )})}
           </ContainerCard>
        
    </>

  )}

export default Home;
