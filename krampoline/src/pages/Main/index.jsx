import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Tooltip from "./Tooltip";

const Main = () => {
  const navigate = useNavigate();

  const moveToStickerPage = (page) => {
    navigate("/sticker", { state: { page: page } });
  };

  // date
  const [date, setDate] = useState(["2023.12.20", "2023.12.26"]);

  return (
    <MainWrapper>
      <DateWrapper>
        <p>
          날짜 : {date[0]}~{date[1]}{" "}
        </p>
      </DateWrapper>
      <InfoWrapper>
        <p>지역을 선택해서 스탬프를 추가해보세요!</p>
        <Tooltip season="겨울" />
      </InfoWrapper>

      <MapWrapper>
        <div className="flex-row">
          <img src="/assets/images/jeju-1.png" alt="jeju-1" className="img1" />
          <img src="/assets/images/jeju-2.png" alt="jeju-2" className="img2" />
          <img src="/assets/images/jeju-3.png" alt="jeju-3" className="img3" />
        </div>
        <div className="flex-row">
          <img src="/assets/images/jeju-6.png" alt="jeju-6" className="img6" />
          <img src="/assets/images/jeju-5.png" alt="jeju-5" className="img5" />
          <img src="/assets/images/jeju-4.png" alt="jeju-4" className="img4" />
        </div>
      </MapWrapper>

      <Button children="지역 선택하기" />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  padding: 2.3rem 5vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MapWrapper = styled.div`
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .img1 {
    width: 8.92219rem;
    height: 7.73113rem;

    position: relative;
    left: 2.5rem;
    top: 1.3rem;
  }
  .img2 {
    width: 6.0705rem;
    height: 5.04581rem;

    position: relative;
    left: -0.5rem;
  }
  .img3 {
    width: 8.3015rem;
    height: 5.55938rem;

    position: relative;
    left: -2.7rem;
    top: -0.7rem;
  }
  .img4 {
    width: 9.86394rem;
    height: 8.204rem;

    position: relative;
    top: -6.3rem;
    left: 0rem;
  }
  .img5 {
    width: 5.93944rem;
    height: 5.11088rem;

    position: relative;
    top: -3rem;
    left: 2.5rem;
  }
  .img6 {
    width: 6.344rem;
    height: 5.22463rem;

    position: relative;
    top: -2rem;
    left: 3.5rem;
  }
`;

const DateWrapper = styled.div`
  width: 100%;
  height: 2.75rem;

  border-radius: 0.4375rem;
  border: 1px solid #fff;
  background: #d9d9d9;

  display: flex;
  justify-content: left;
  align-items: center;

  padding-left: 1rem;
  margin-bottom: 0.6rem;
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.5rem;

  position: relative;
  z-index: 20;
`;
