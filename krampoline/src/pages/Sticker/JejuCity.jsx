import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { placeList } from "./placeList.js";
import { useState } from "react";

/**
 * 제주시
 *
 * 1 : 1100 고지
 * 2 : 동백 포레스트
 * 3 : 소천지
 */

const JejuCity = () => {
  const location = useLocation();
  const page = location.state.page;

  // get image url

  // image url
  const [url1, setUrl1] = useState("/assets/images/dummy-sticker.png");
  const [url2, setUrl2] = useState("/assets/images/dummy-sticker.png");
  const [url3, setUrl3] = useState("/assets/images/dummy-sticker.png");

  // control animation
  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 10,
    delay: 0.5,
  };

  return (
    <MainWrapper>
      <TitleWrapper>
        <p>{placeList[page].name}</p>
      </TitleWrapper>
      <MapWrapper>
        {/* 지도 */}
        <img
          src={placeList[page].imgUrl}
          alt={placeList[page].name}
          className="map"
        />
        {/* 스티커 */}
        {/* 1100고지 */}
        {url1.length && (
          <motion.img
            src={url1}
            alt="1100고지"
            className="sticker1 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
        {/* 동백 포레스트 */}
        {url2.length && (
          <motion.img
            src={url2}
            alt="동백 포레스트"
            className="sticker2 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
        {/* 소천지 */}
        {url3.length && (
          <motion.img
            src={url3}
            alt="소천지"
            className="sticker3 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
      </MapWrapper>
    </MainWrapper>
  );
};

export default JejuCity;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MapWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80vw;

  position: relative;
  .map {
    width: 80vw;
  }
  .sticker-fix {
    position: fixed;
    z-index: 10;
    width: 5rem;
  }
  .sticker1 {
    top: 11rem;
    left: 3rem;
  }
  .sticker2 {
    top: 13rem;
    left: 15rem;
  }
  .sticker3 {
    top: 18rem;
    left: 9rem;
  }
`;
