import React, { useEffect, useState } from "react";
import eye from "../assets/images/eye.png";
import transactions from "../assets/images/transactions.jpg";
import uppart from "../assets/images/uppart.jpg";
import uppart2 from "../assets/images/uppart2.jpg";
import downpart from "../assets/images/downpart.jpg";
import error from "../assets/images/error.jpg";
import styled from "styled-components";

export const ProfileData = () => {
  const [transferOptions, setTransferOptions] = useState(false);
  const [transferSection, setTransferSection] = useState(false);
  const [errorSection, setErrorSection] = useState(false);
  const [loading, setLoading] = useState(true);

  const openTransferOptions = () => {
    setTransferOptions(!transferOptions);
  };

  const openTransferSection = () => {
    setTransferSection(!transferSection);
  };

  const openErrorContainer = () => {
    setLoading(false);
    setTimeout(() => {
      setErrorSection(!errorSection);
      setLoading(true);
    }, 500);
  };
  


  return (
    <section className="profile__data">
      <div className="money__container">
        <div className="account__balance">
          <p className="account">CA $1890-9</p>
          <p className="balance">
            $3,923,370
            <span className="pennys">56</span>
          </p>
        </div>
        <div className="eye__container">
          <img className="logo" src={eye} alt="eye" />
        </div>
      </div>
      <div className="options__container" onClick={openTransferOptions}>
        <img src={transactions} alt="" />
      </div>
      <TransferOptions className={transferOptions ? "active" : ""}>
        <UpPart onClick={openTransferOptions}>
          <img src={uppart} alt="" />
        </UpPart>
        <DownPart>
          <img src={downpart} alt="" onClick={openTransferSection} />
        </DownPart>
        <TransferSection className={transferSection ? "active" : ""}>
          <UpPart onClick={openTransferSection}>
            <img src={uppart2} alt="" />
          </UpPart>
          <InputContainer>
            <input type="text" placeholder="Alias, CBU o CVU" maxLength="22" />
            <button onClick={openErrorContainer}>Continuar</button>
          </InputContainer>
            <LoaderContainer className={loading ? '' : 'active'}>
              <div className="loading"></div>
            </LoaderContainer>
            <ErrorContainer className={errorSection ? "active" : ""}>
              <ErrorImageContainer>
                <img src={error} alt="" onClick={openErrorContainer} />
              </ErrorImageContainer>
              <TextContainer>
                <p>En este momento no podemos realizar la operación seleccionada. Por favor, intentalo más tarde.</p>
              </TextContainer>
            </ErrorContainer>
        </TransferSection>
      </TransferOptions>
    </section>
  );
};

const TransferOptions = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 101;
  transition: all 0.3s ease;

  &.active {
    right: 0;
  }
`;

const UpPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0px;

  img {
    width: 100%;
  }
`;

const DownPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;

  img {
    width: 100%;
  }
`;

const TransferSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 101;
  transition: all 0.3s ease;

  &.active {
    right: 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 75%;

  input {
    width: 80%;
    border: none;
    border-bottom: 1px solid #8950f7;
    padding: 10px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #aaa;
      font-size: 1rem;
    }
  }

  button {
    width: 85%;
    background-color: #8950f7;
    color: #fff;
    border: none;
    padding: 14px;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
  }
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  z-index: 101;
  transition: all 0.3s ease;
  opacity: 0;

  &.active {
    display: block;
    opacity: 0.2;
  }
`;

const ErrorContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 101;
  transition: all 0.3s ease;

  &.active {
    right: 0;
  }
`;

const ErrorImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 0px;

  img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;
  padding: 0 80px;
  p {
    text-align: center;
    line-height: 1.3;
    opacity: 0.8;
    font-size: 1rem;
  }
`;