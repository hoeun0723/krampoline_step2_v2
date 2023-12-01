import { useNavigate } from "react-router";
import Button from "../../components/Button";
import * as S from "./MakeNew.style";

const MakeNew = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/theme-select");
  };
  return (
    <S.Container>
      <S.Img src="/assets/images/logo.png" />
      <S.ButtonContainer>
        {/* <Button
          customStyle={
            "background-color:white; border: 1px solid #6EB5A2; color:#6EB5A2;"
          }
        >
          기존 정보 불러오기
        </Button> */}
        <Button onClick={handleButton}>새로 만들기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default MakeNew;
