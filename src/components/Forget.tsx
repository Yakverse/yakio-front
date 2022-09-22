import "../styles/Forget.scss";
import { useState, useEffect } from "react";

const Forget = () => {
  return (
    <div className="forget">
      <div className="forget-container">
        <h2 className="forget-title">Don't remember your User/Password?</h2>
        <form className="forget-form">
          <label htmlFor="forget">Put your email here:</label>
          <input
            type="email"
            id="forget"
            name="forget"
            autoComplete="off"
            required
          />
          <button className="forget-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Forget;
