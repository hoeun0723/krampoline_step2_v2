import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { placeList } from "../placeList.js";
import { useEffect, useState } from "react";
import List from "../../../components/List/index.jsx";
import ListModal from "../../Main/List.jsx";

const JoongMoon = () => {
  const location = useLocation();
  const imgUrl = location.state.imgUrl;
  const placeName = location.state.placeName;

  // image url
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");

  useEffect(() => {
    // get image url
    if (placeName === "1100고지") {
      setUrl1(imgUrl);
    }
    if (placeName === "소천지") {
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
        <p>{placeList[5].name}</p>
      </TitleWrapper>
      <MapWrapper>
        {/* 지도 */}
        <img
          src={placeList[5].imgUrl}
          alt={placeList[5].name}
          className="map"
        />
        {/* 스티커 */}
        {/* 1100고지 */}
        {url1.length > 0 && (
          <motion.img
            src={url1}
            alt="1100고지"
            className="sticker1 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
        {/* 소천지 */}
        {url2.length > 0 && (
          <motion.img
            src={url2}
            alt="소천지"
            className="sticker2 sticker-fix"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={transition}
          />
        )}
      </MapWrapper>
      <ListModal part={5} />
    </MainWrapper>
  );
};

export default JoongMoon;

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
    width: 50vw;
  }
  .sticker-fix {
    position: fixed;
    z-index: 10;
    width: 4rem;
    border-radius: 50%;
  }
  .sticker1 {
    top: 9.3rem;
    left: 6.5rem;
  }
  .sticker2 {
    top: 17rem;
    left: 11.5rem;
  }
`;
