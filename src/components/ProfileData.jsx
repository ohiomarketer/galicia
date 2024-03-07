import React from "react";
import eye from "../assets/images/eye.png";
import transactions from "../assets/images/transactions.jpg";

export const ProfileData = () => {
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
      <div className="options__container">
        <img src={transactions} alt="" />
      </div>
    </section>
  );
};
