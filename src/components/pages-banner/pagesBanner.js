import React from "react";
import Layout from "../../HOC/layout/layout";
import Overlay from "../overlay/overlay";
import styled from "styled-components";

const PagesBannerStyled = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding: 77px 0px;
  position: relative;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    z-index: 5;
    position: relative;
    color: #ffffff;
    text-align: center;
  }
`;

const PagesBanner = ({ text, img }) => {
  return (
    <PagesBannerStyled img={img}>
      <Overlay />
      <Layout>
        <h2>{text}</h2>
      </Layout>
    </PagesBannerStyled>
  );
};

export default PagesBanner;
