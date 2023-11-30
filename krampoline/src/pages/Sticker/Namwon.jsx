import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { placeList } from "./placeList.js";

const Namwon = () => {
  const location = useLocation();
  const page = location.state.page;

  console.log(page);

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
        <motion.img
          src="/assets/images/dummy-sticker.png"
          alt="sticker"
          className="sticker"
          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
        {/* 동백 포레스트 */}
      </MapWrapper>
    </MainWrapper>
  );
};

export default Namwon;

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
  .sticker {
    position: fixed;
    top: 230px;
    left: 60px;

    z-index: 10;

    width: 3rem;
  }
  .title {
    padding-top: 4rem;
    padding-bottom: 1.75rem;

    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
