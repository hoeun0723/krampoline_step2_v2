import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import * as S from "./Start.style";
import Input from "../../components/Input";
import axios from "axios";
import { useState } from "react";
const Start = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };
  const handleButton = async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    const response = await axios.post(`${API_URL}/api/users`, {
      username: username,
    });
    console.log("클릭");
    console.log(response);
    navigate("/make-new");
  };
  return (
    <S.Container>
      <S.Img />
      <S.ButtonContainer>
        <Input
          placeholder="아이디를 입력해주세요"
          value={username}
          onChange={handleInput}
        />
        <Button onClick={handleButton}>시작하기</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Start;
