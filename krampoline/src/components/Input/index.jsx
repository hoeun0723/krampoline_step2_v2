import * as S from "./Input.style";

const Input = ({ value, placeholder, onChange, disabled }) => {
  return (
    <S.Container
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
