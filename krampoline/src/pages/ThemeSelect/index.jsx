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
      <S.Text>제주에 방문하는 날짜를 설정해주세요!</S.Text>
      <S.SubContainer>
        <Calendar placeholder="가는 날짜를 선택하세요" title="가는 날짜" />
        <Calendar placeholder="오는 날짜를 선택하세요" title="오는 날짜" />
      </S.SubContainer>
      <S.ThemeText>방문하는 계절을 선택하세요!</S.ThemeText>
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
    </S.Container>
  );
};

export default ThemeSelect;
