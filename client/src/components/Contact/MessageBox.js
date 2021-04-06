import React, { useState } from "react";
import styled from "styled-components";

import PROD_API from "../../api";

const MessageBox = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(`${PROD_API}/message`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    const data = await response.json();

    if (data.status === "fail") {
      alert("Message failed to send.");
      resetForm();
    } else if (data.status === "success") {
      alert("Message sent");
      resetForm();
    }
  };

  return (
    <StyledBox>
      <StyledTitle>Direct message</StyledTitle>
      <StyledForm onSubmit={submitHandler}>
        <input
          type="email"
          value={email}
          name="email"
          onChange={emailHandler}
          placeholder="Your email"
          required
        />
        <textarea
          value={message}
          name="message"
          onChange={messageHandler}
          placeholder="Your message"
          required
        ></textarea>
        <input type="submit" value="Send" />
      </StyledForm>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 24px;
  background: #0f1628;
`;

const StyledTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 0.75em 1em;
`;

const StyledForm = styled.form`
  display: flex;
  padding: 0 1.75em;
  flex-direction: column;
  align-items: center;
  input[type="email"] {
    width: 100%;
    height: 40px;
    background: white;
    padding: 1em;
    border-radius: 16px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 230px;
    border-radius: 16px;
    resize: none;
    outline: none;
    padding: 1em;
    border: 1px solid black;
    margin: 1em 0em;
    font-weight: bold;
  }
  input[type="submit"] {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 1em;
  }
`;

export default MessageBox;
