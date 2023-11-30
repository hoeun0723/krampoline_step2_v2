import * as S from "./GNB.style";

const GlobalNavigation = ({ nowPage }) => {
  return (
    <S.Container>
      <S.ButtonContainer $nowPage={nowPage === 1}>홈</S.ButtonContainer>
      <S.ButtonContainer $nowPage={nowPage === 2}>AI</S.ButtonContainer>
      <S.ButtonContainer $nowPage={nowPage === 3}>마이</S.ButtonContainer>
    </S.Container>
  );
};

export default GlobalNavigation;
