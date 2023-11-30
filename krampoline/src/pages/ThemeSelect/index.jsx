import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import GlobalNavigation from "../../components/GNB";
import * as S from "./ThemeSelect.style";

const ThemeSelect = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/test");
  };
  return (
    <S.Container>
      <S.CalendarContainer>
        <S.Text>가는 날짜</S.Text>
        <Calendar />
      </S.CalendarContainer>
      <S.CalendarContainer>
        <S.Text>오는 날짜</S.Text>
        <Calendar />
      </S.CalendarContainer>
      <S.Text>방문하시는 계절을 선택해주세요!</S.Text>
      <S.ThemeContainer>
        <S.OneLine>
          <S.Theme>봄</S.Theme>
          <S.Theme>여름</S.Theme>
        </S.OneLine>
        <S.OneLine>
          <S.Theme>가을</S.Theme>
          <S.Theme>겨울</S.Theme>
        </S.OneLine>
      </S.ThemeContainer>
      <S.ButtonContainer>
        <Button onClick={handleButton}>입력 완료!</Button>
      </S.ButtonContainer>
      <S.GNBContainer>
        <GlobalNavigation nowPage={1} />
      </S.GNBContainer>
    </S.Container>
  );
};

export default ThemeSelect;
