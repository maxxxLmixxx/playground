/* eslint-disable react/jsx-pascal-case */
import React from "react";
import $Main from "./containers/transition-animations/AnimatedMain";

import pBody from "assets/images/main/p-body.jpg";
import atlas from "assets/images/main/atlas.jpg";

import "./styles/main-general.scss";

const LeftMain = (props) => {
  return <div {...props}></div>
}
const RightMain = (props) => {
  return <div {...props}></div>
}

export default function Main({ isScrollEvent }) {
  return (
    <>
      <$Main subscribe={isScrollEvent} className="main-wrapper main-container">
        <LeftMain>
          <img
            className="main-image main-image--left"
            src={pBody}
            alt="p-body"
          />
        </LeftMain>

        <RightMain>
          <img
            className="main-image main-image--right"
            src={atlas}
            alt="atlas"
          />
        </RightMain>
      </$Main>
    </>
  );
}
