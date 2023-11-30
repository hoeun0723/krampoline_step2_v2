import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as S from "./Start.style";
import Input from "../../components/Input";
const Start = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("./make-new");
    console.log("클릭");
  };
  return (
    <S.Container>
      <S.Img />
      <S.ButtonContainer>
        <Input placeholder="아이디를 입력해주세요" />
        <Button onClick={handleButton}>시작하기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Start;
