import * as S from "./GNB.style";

const GlobalNavigation = ({ nowPage }) => {
  return (
    <S.Container>
      <S.ButtonContainer $nowPage={nowPage === 1}>
        <img src="/assets/icon/home-off.svg" alt="home" />
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
