import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { placeList } from "../placeList.js";
import { useEffect, useState } from "react";
import List from "../../../components/List/index.jsx";
import ListModal from "../../Main/List.jsx";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const JejuCity = () => {
  const location = useLocation();
  const imgUrl = location.state.imgUrl;
  const placeName = location.state.placeName;
  const desc = location.state.desc;

  // image url
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");

  // 스탬프 붙임 여부
  const [isDone1, setIsDone1] = useState(false);
  const [isDone2, setIsDone2] = useState(false);

  useEffect(() => {
    // get image url
    if (placeName === "도두봉") {
      setUrl1(imgUrl);
      setIsDone1(true);
    }
    if (placeName === "동문시장") {
      setUrl2(imgUrl);
      setIsDone2(true);
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
        <p>{placeList[2].name}</p>
      </TitleWrapper>
      <MapWrapper>
        {/* 지도 */}
        <img
          src={placeList[2].imgUrl}
          alt={placeList[2].name}
          className="map"
        />
        {/* 스티커 */}
        {/* 도두봉 */}
        {url1.length > 0 && (
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <motion.img
                src={url1}
                alt="도두봉"
                className="sticker1 sticker-fix"
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={transition}
              />
            </PopoverTrigger>
            <PopoverContent>
              <div
                style={{
                  width: "90vw",
                  background: "white",
                  marginRight: "5vw",
                  borderRadius: "0.625rem",
                  boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    margin: "1.69rem 1rem 1rem 1rem",
                  }}
                >
                  <p
                    style={{
                      color: "#70a597",
                      fontSize: "1rem",
                      fontFamily: "Pretandard",
                      fontWeight: "700",
                    }}
                  >
                    소감 다시보기
                  </p>
                </div>
                <center>
                  <PopoverBody>
                    <div
                      style={{
                        width: "80vw",
                        height: "7rem",
                        borderRadius: "0.625rem",
                        border: "1px solid #6EB5A2",
                        background: "white",
                        marginBottom: "1.56rem",
                        padding: "1rem",
                        textAlign: "left",
                      }}
                    >
                      {desc}
                    </div>
                  </PopoverBody>
                </center>
              </div>
            </PopoverContent>
          </Popover>
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
      <ListModal part={2} />
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
    top: 10.2rem;
    left: 6rem;
  }
  .sticker2 {
    top: 9.1rem;
    left: 12.5rem;
  }
`;
