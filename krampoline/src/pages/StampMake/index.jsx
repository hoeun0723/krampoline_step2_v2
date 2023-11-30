// import { useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./StampMake.style";
// import axios from "axios";
import GlobalNavigation from "../../components/GNB";
import { useNavigate } from "react-router";

const StampMake = () => {
  const navigate = useNavigate();
  //   useEffect(async () => {
  //     const formData = {};

  //     const API_URL = import.meta.env.REACT_APP_BASE_URL;
  //     const response = await axios.post(`${API_URL}/`, formData);
  //   }, []);

  //   const handleButton = () => {
  //     navigate("/sticker");
  //   };
  return (
    <S.Container>
      <S.AIContainer>생성형 AI 스탬프</S.AIContainer>
      <S.InputWhole>
        <S.InputContainer>
          <S.InputText>방문 장소</S.InputText>
          <Input placeholder="장소를 입력해주세요" />
        </S.InputContainer>
        <S.InputContainer>
          <S.InputText>소감</S.InputText>
          <Input placeholder="장소를 방문한 소감을 작성해주세요" />
        </S.InputContainer>
      </S.InputWhole>
      <S.ButtonContainer>
        <Button>스템프 추가하기</Button>
      </S.ButtonContainer>
      <S.GNBContainer>
        <GlobalNavigation nowPage={2} />
      </S.GNBContainer>
    </S.Container>
  );
};

export default StampMake;
