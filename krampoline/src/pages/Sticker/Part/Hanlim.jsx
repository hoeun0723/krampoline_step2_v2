import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { placeList } from "../placeList.js";
import { useEffect, useState } from "react";
import List from "../../../components/List/index.jsx";
import ListModal from "../../Main/List.jsx";

const Hanlim = () => {
  const location = useLocation();
  const imgUrl = location.state.imgUrl;
  const placeName = location.state.placeName;

  // image url
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");

  useEffect(() => {
    // get image url
    if (placeName === "탐나는 농장") {
      setUrl1(imgUrl);
    }
    if (placeName === "새별오름") {
      setUrl2(imgUrl);
    }
  }, [imgUrl, placeName]);

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
        <p>{placeList[1].name}</p>
      </TitleWrapper>
      <MapWrapper>
        {/* 지도 */}
        <img
          src={placeList[1].imgUrl}
          alt={placeList[1].name}
          className="map"
        />
        {/* 스티커 */}
        {/* 도두봉 */}
        {url1.length > 0 && (
          <motion.img
            src={url1}
            alt="도두봉"
            className="sticker1 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
        {/* 동문시장 */}
        {url2.length > 0 && (
          <motion.img
            src={url2}
            alt="동문시장"
            className="sticker2 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
      </MapWrapper>
      <ListModal />
    </MainWrapper>
  );
};

export default Hanlim;

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
  padding: 2rem 0;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MapWrapper = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;

  position: relative;

  background-color: #f9f9f9;
  .map {
    width: 70vw;
  }
  .sticker-fix {
    position: fixed;
    z-index: 10;
    width: 4rem;
    border-radius: 50%;
  }
  .sticker1 {
    top: 9rem;
    left: 7.2rem;
  }
  .sticker2 {
    top: 16rem;
    left: 12.5rem;
  }
`;
