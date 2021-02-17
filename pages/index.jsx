import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from '../src/components/Link';
import Image from 'next/image'

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
  padding: 10px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;

const ItemCard = styled.div`
  width: auto;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  margin-bottom: 20px;
  border-radius: 8px;
 
  .iconRight {
    margin: 20px 10px 0 0;
    float: right;
  }
`;

const TextCard = styled.div`
  margin: 2px 0 0 10px;

  font-family: 'Lato';
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;

`;

const QuantityCard = styled.div`
  margin: 0 0 0 25px;
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  text-decoration: none;

  color: #9586A8;
`;

const Home = () => {
  const [categoria, setCategoria] = useState([])

  const router = useRouter();
  
  useEffect(() => {
    axios.get('https://app-menu-online.herokuapp.com/categorias', {
      header:('Content-Type: application/json'),
    }).then(response => {
    setCategoria(response.data);
    console.log(response.data)
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

                
                <ItemCard key={result.id} >
                  <Link href={`${(result.nome_categoria).toLowerCase()}`}>               
                  <img style={{ width: '100%', height: '80%'}} src={result.imagem_categoria.name} alt="new"/>
                  < FaArrowRight className="iconRight"/>
              </Link>
              <TextCard>{result.nome_categoria}</TextCard>
              <QuantityCard>{result.id}</QuantityCard>
              </ItemCard>
              
               )})}
           </ContainerCard>
        
    </>

  )}

export default Home;