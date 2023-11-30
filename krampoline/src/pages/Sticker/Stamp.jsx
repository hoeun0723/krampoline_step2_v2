import { useRef } from "react";
import styled from "styled-components";

import DummySticker from "./DummySticker";
import MoveSticker from "./MoveSticker";

const StampList = () => {
  const dragItemRef = useRef(null);
  const containerRef = useRef(null);

  let active = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  const dragStart = (e) => {
    console.log(dragStart);
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItemRef.current) {
      active = true;
    }
  };

  const dragEnd = (e) => {
    initialX = currentX;
    initialY = currentY;

    active = false;
  };

  const drag = (e) => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItemRef.current);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  };

  return (
    <MainWrapper>
      <p className="title">생성된 스탬프</p>
      <ListWrapper>
        <div
          id="container"
          ref={containerRef}
          onTouchStart={dragStart}
          onTouchEnd={dragEnd}
          onTouchMove={drag}
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
          onMouseMove={drag}
        >
          <img
            src="/assets/images/jeju-1.png"
            id="item"
            ref={dragItemRef}
            style={{ width: "50px" }}
          />
        </div>

        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
        <DummySticker />
      </ListWrapper>
    </MainWrapper>
  );
};

export default StampList;

const MainWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: left;
  .title {
    padding-left: 10vw;
  }
`;

const ListWrapper = styled.div`
  margin-top: 0.44rem;
  margin-bottom: 6.31rem;
  background-color: #f1f1f1;

  height: 6.25rem;
  width: auto;

  display: flex;
  align-items: center;
  gap: 1.31rem;

  overflow-y: scroll;
`;
