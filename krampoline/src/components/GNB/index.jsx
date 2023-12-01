import { useNavigate } from "react-router-dom";
import * as S from "./GNB.style";

const GlobalNavigation = ({ nowPage }) => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.ButtonContainer $nowPage={nowPage === 1}>
        <img
          src="/assets/icon/home-off.svg"
          alt="home"
          onClick={() => navigate("/test")}
        />
      </S.ButtonContainer>

      <S.ButtonContainer $nowPage={nowPage === 2}>
        <img src="/assets/icon/stamp-off.svg" alt="stamp" />
      </S.ButtonContainer>
      <S.ButtonContainer $nowPage={nowPage === 3}>
        <img src="/assets/icon/list-off.svg" alt="list" />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default GlobalNavigation;
