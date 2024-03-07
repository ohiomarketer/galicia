import React from 'react';
import dudas from '../assets/images/dudas.png';
import styled from 'styled-components';

export const Support = () => {
  return (
    <SupportContainer>
      <img src={dudas} alt="" draggable='false'/>
    </SupportContainer>
  );
};

const SupportContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
`;

