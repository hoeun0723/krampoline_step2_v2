import styled from "styled-components";
import List from "../../components/List";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ListModal = () => {
  const placeList = [
    ["1100고지", "제주도 최고의 눈꽃명소", "제주 서귀포시 1100로 1555"],
    [
      "동백포레스트",
      "제주도의 만개한 동백꽃 스팟",
      "제주 서귀포시 남원읍 생기악로 53-38",
    ],
    [
      "소천지",
      "눈 내린 아름다운 한라산을 볼 수 있는 스팟",
      "제주 서귀포시 남원읍 생기악로 53-38",
    ],
  ];

  //   const [startY, setStartY] = useState(0);
  //   const [drawerTop, setDrawerTop] = useState(70);
  //   const touchStart = (e) => {
  //     setStartY(e.touches[0].clientY);
  //   };

  //   const touchMove = (e) => {
  //     if (startY !== null) {
  //       const deltaY = e.touches[0].clientY - startY;

  //       console.log(deltaY, startY);

  //       if (drawerTop > 40) {
  //         setDrawerTop((prevTop) => Math.max(0, prevTop + deltaY));

  //         setStartY(e.touches[0].clientY);
  //       }
  //     }
  //   };

  //   const touchEnd = () => {
  //     setStartY(null);
  //   };

  return (
    <MainWrapper
    //   style={{
    //     position: "absolute",
    //     top: `${drawerTop}vh`,
    //     height: `${drawerTop}vh`,
    //     overflow: "hidden",
    //   }}
    >
      <div>
        <div
          className="bar-box"
          //   onTouchStart={(e) => touchStart(e)}
          //   onTouchMove={(e) => touchMove(e)}
          //   onTouchEnd={() => touchEnd()}
        >
          <img src="/assets/images/black-bar.png" className="bar" alt="bar" />
        </div>
        <div className="title-box">
          <p>장소를 선택하고 스탬프를 생성해주세요</p>
        </div>
      </div>
      <ListWrapper>
        {placeList.map((data) => {
          return <List place={data[0]} desc={data[1]} address={data[2]} />;
        })}
      </ListWrapper>
    </MainWrapper>
  );
};

export default ListModal;

const MainWrapper = styled.div`
  width: 100vw;
  height: 45vh;

  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);

  overflow-y: hidden;

  .bar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    .bar {
      margin-top: 0.63rem;

      margin-bottom: 2.5rem;
      width: 4.75rem;
      height: 0.3125rem;
    }
  }

  .title-box {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0 2rem;

    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ListWrapper = styled.div`
  margin-top: 1.37rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
