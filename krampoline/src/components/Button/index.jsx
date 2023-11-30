import * as S from "./Button.style";

const Button = ({ children, disabled, onClick, customStyle }) => {
  return (
    <S.Container
      disabled={disabled}
      onClick={onClick}
      customStyle={customStyle}
    >
      {children}
    </S.Container>
  );
};

export default Button;
