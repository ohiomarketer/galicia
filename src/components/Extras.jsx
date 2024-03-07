import React from 'react';
import extras from '../assets/images/extras.jpg';
import styled from 'styled-components';

export const Extras = () => {
  return (
    <ExtrasContainer>
      <img src={extras} alt="" draggable='false'/>
    </ExtrasContainer>
  );
};

const ExtrasContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
`;

