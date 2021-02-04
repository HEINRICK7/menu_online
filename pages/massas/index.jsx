import React from 'react';
import { 
        Title,
        ContainerCard,
        ItemCard,
        ImageCard,
        TextCard,
        QuantityCard,
        PriceCard
       } from './massasStyle';

import Header from '../../src/components/Header/index';
import Input from '../../src/components/Input'

const Massas = () => {
    return (
        <>
          <Header />
          <Title>Massas</Title>
          <Input />
          <ContainerCard> 
              <ItemCard>
              <TextCard>Tagliatelle ao molho</TextCard>
              <PriceCard><strong style={{color:'#2ABB9B'}}>R$ 15.50 </strong> / pessoa</PriceCard>
                <ImageCard />
                <QuantityCard>(53)</QuantityCard>
              </ItemCard>
           </ContainerCard>
        </>

    )
}

export default Massas;