import React, { useState } from "react";
import eye from "../assets/images/eye.png";
import transactions from "../assets/images/transactions.jpg";
import uppart from "../assets/images/uppart.jpg";
import uppart2 from "../assets/images/uppart2.jpg";
import downpart from "../assets/images/downpart.jpg";
import styled from "styled-components";

export const ProfileData = () => {
  const [transferOptions, setTransferOptions] = useState(false);
  const [transferSection, setTransferSection] = useState(false);

  const openTransferOptions = () => {
    setTransferOptions(!transferOptions);
  }

  const openTransferSection = () => {
    setTransferSection(!transferSection);
  }

  return (
    <section className="profile__data">
      <div className="money__container">
        <div className="account__balance">
          <p className="account">CA $1890-9</p>
          <p className="balance">
            $4,982,750
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
      {/* toggle transferOptions classname active */}
      <TransferOptions className={transferOptions ? "active" : ""}>
        <UpPart onClick={openTransferOptions}>
          <img src={uppart} alt="" />
        </UpPart>
        <DownPart>
          <img src={downpart} alt="" onClick={openTransferSection} />
        </DownPart>
        <TransferSection className={transferSection ? "active" : ""}>
          <UpPart onClick={openTransferSection}>
            <img src={uppart2} alt=""  style={{
              width: "93%"
            }}/>
          </UpPart> 
          <InputContainer>
            <input type="text" placeholder="Alias, CBU o CVU" />
            <button>Continuar</button>
          </InputContainer>
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
  }

  button {
    width: 85%;
    background-color: #8950f7;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
`;