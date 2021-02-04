import styled from 'styled-components';

export const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
  margin: 10px 0 0 20px ;
  font-family: Montserrat;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0.41px;
  color: #2D0C57;
`;

export const ContainerCard = styled.div`
  max-width: 1200px;
  margin:50px 0 0 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));

`;

export const ItemCard = styled.div`
  position: absolute;
  width: 100%;
  height: 160px;

`;

export const ImageCard = styled.div`
  position: absolute;
  width: 50%;
  left: 20px;
  right: 0;
  top: 0;
  bottom: 0;
  background: url('https://exame.com/wp-content/uploads/2018/04/thinkstockphotos-807218760.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

`;

export const TextCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
position: absolute;
left: 58%;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 22px;
letter-spacing: -0.41px;
color: #317589

`;

export const PriceCard = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  color: #317589;
  position: absolute;
  height: 22px;
  left: 60%;
  top: 40px;

  font-size: 20px;
  font-family: Montserrat;

`;

export const QuantityCard = styled.div`
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
