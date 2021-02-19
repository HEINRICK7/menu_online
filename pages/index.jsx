import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from '../src/components/Link';

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import axios from 'axios';


import { FaArrowRight } from "react-icons/fa";

import Input from '../src/components/Input';

import Header from '../src/components/Header/index';




const Title = styled.div`
  margin: 5px 0 0 20px ;
  font-family: Lato;
  font-size: 28px;
  line-height: 41px;
  /* identical to box height, or 121% */
  letter-spacing: 0.41px;
  color: #FFFF;

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
  background-color: #fcb045;
  box-shadow: rgba(23, 23, 36, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
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
const IconSearch = styled.div`

  color: rgba(58, 155, 240, 0.767);

`;
const Spinner = styled.div`
  display: block;
  text-align: center;
  justify-content: center;
  margin-top: 100px;
`;

const Home = () => {

  const [categorias, setCategorias] = useState([])
  const [ search, setSearch ] = useState('');
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  
  useEffect(() => {
    axios.get('https://app-menu-online.herokuapp.com/categorias', {
      header:('Content-Type: application/json'),
    }).then(response => {
      setLoading(false)  
      setCategorias(response.data);
      console.log(response.data)
});

  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = categorias.filter(categoria => 
    categoria.nome_categoria.toLowerCase().includes(search.toLowerCase()))

    console.log(filteredCoins)

  return (
    <>
        <Header/>
        <Title>Categorias</Title>
           <Input
             type="text" 
             placeholder="pesquizar" 
             className="coin-input"
             onChange={handleChange}
           />
           
           
           <ContainerCard>
             {
             loading ? (
               <Spinner>
                <ClimbingBoxLoader 
                color={'#F5A623'} 
                loading={loading} 
                size={30}
                />
                </Spinner>
             ):(
               <>
              {filteredCoins.map(result => (
              
                <ItemCard key={result.id} >
                  <Link href={`${(result.nome_categoria).toLowerCase()}`}>               
                    <img style={{ width: '100%', height: '80%', borderRadius:'8px 8px 50px 50px'}} src={result.imagem_categoria.name} alt="new"/>
                    < FaArrowRight className="iconRight"/>
                  </Link>
                  <TextCard>{result.nome_categoria}</TextCard>
                  <QuantityCard>{result.id}</QuantityCard>
                </ItemCard>
              
               ))}
             </>
             )}
            
           </ContainerCard>

    </>

  )}
export default Home;
