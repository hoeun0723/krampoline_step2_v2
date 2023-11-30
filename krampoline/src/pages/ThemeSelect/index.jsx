import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import * as S from "./ThemeSelect.style";
import { useState } from "react";

const ThemeSelect = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/test");
  };
  const [springActive, setSpringActive] = useState(false);
  const [summerActive, setSummerActive] = useState(false);
  const [fallActive, setFallActive] = useState(false);
  const [winterActive, setWinterActive] = useState(false);

  const handleSpringActivation = (isActive) => {
    setSpringActive(true);
    setSummerActive(false);
    setFallActive(false);
    setWinterActive(false);
  };

  const handleSummerActivation = (isActive) => {
    setSpringActive(false);
    setSummerActive(true);
    setFallActive(false);
    setWinterActive(false);
  };

  const handleFallActivation = (isActive) => {
    setSpringActive(false);
    setSummerActive(false);
    setFallActive(true);
    setWinterActive(false);
  };

  const handleWinterActivation = (isActive) => {
    setSpringActive(false);
    setSummerActive(false);
    setFallActive(false);
    setWinterActive(true);
  };

  const getSpringImagePath = () => {
    if (springActive) {
      return "/assets/images/harbang-spring-active.png";
    } else {
      return "/assets/images/harbang-spring.png";
    }
  };

  const getSummerImagePath = () => {
    if (summerActive) {
      return "/assets/images/harbang-summer-active.png";
    } else {
      return "/assets/images/harbang-summer.png";
    }
  };

  const getFallImagePath = () => {
    if (fallActive) {
      return "/assets/images/harbang-fall-active.png";
    } else {
      return "/assets/images/harbang-fall.png";
    }
  };

  const getWinterImagePath = () => {
    if (winterActive) {
      return "/assets/images/harbang-winter-active.png";
    } else {
      return "/assets/images/harbang-winter.png";
    }
  };
  return (
    <S.Container>
      <S.Text>제주에 방문하는 날짜를 설정해주세요!</S.Text>
      <S.SubContainer>
        <Calendar placeholder="가는 날짜를 선택하세요" title="가는 날짜" />
        <Calendar placeholder="오는 날짜를 선택하세요" title="오는 날짜" />
      </S.SubContainer>
      <S.ThemeText>방문하는 계절을 선택하세요!</S.ThemeText>
      <S.ThemeContainer>
        <S.OneLine>
          <S.Theme onClick={handleSpringActivation}>
            <S.ThemeInnerText>봄</S.ThemeInnerText>
            <S.Img src={getSpringImagePath()} customStyle="margin-top: 2rem;" />
          </S.Theme>
          <S.Theme onClick={handleSummerActivation}>
            <S.ThemeInnerText>여름</S.ThemeInnerText>
            <S.Img src={getSummerImagePath()} customStyle="width:6rem;" />
          </S.Theme>
        </S.OneLine>
        <S.OneLine>
          <S.Theme onClick={handleFallActivation}>
            <S.ThemeInnerText>가을</S.ThemeInnerText>
            <S.Img src={getFallImagePath()} customStyle="width: 3.5rem;" />
          </S.Theme>
          <S.Theme onClick={handleWinterActivation}>
            <S.ThemeInnerText>겨울</S.ThemeInnerText>
            <S.Img src={getWinterImagePath()} customStyle="width: 4.5rem;" />
          </S.Theme>
        </S.OneLine>
      </S.ThemeContainer>
      <S.ButtonContainer>
        <Button onClick={handleButton}>입력 완료!</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ThemeSelect;
