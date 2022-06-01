import React from "react";
import LoginForm from "../../components/LoginForm";
import styled from "styled-components";

const index = () => {
  return (
    <>
      <Background>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </Background>
    </>
  );
};

export default index;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Background = styled.div`
  background-image: url("/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;
