import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp> GET ALL THERE</SignUp>
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          res,
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    z-index: -1;
    opacity: 0.7;
    background: url("/images/login-background.jpg");
  }
`;

const CTA = styled.div`
  max-width: 600px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 17px 0px;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  text-align: center;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  padding: 17px 0px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 8px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img``;
