import React from 'react';
import actions from '../assets/images/actions.png';
import styled from 'styled-components';

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <img src={actions} alt="" draggable='false'/>
    </TransactionsContainer>
  );
};

const TransactionsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
`;

