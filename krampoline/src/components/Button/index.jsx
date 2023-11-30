import * as S from "./Button.style";

const Button = ({ children, disabled, onClick }) => {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      {children}
    </S.Container>
  );
};

export default Button;
