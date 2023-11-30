import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as S from "./Start.style";
const Start = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("./theme-select");
    console.log("클릭");
  };
  return (
    <S.Container>
      <S.Img />
      <S.ButtonContainer>
        <Button>아이디를 입력해주세요</Button>
        <Button onClick={handleButton}>시작하기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Start;
