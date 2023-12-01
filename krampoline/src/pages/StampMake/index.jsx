// import { useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./StampMake.style";
// import axios from "axios";
import GlobalNavigation from "../../components/GNB";
import { useNavigate, useLocation } from "react-router";

// ai api
import OpenAI from "openai";
import { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import jejuData from "../../data/jejuData";

// image download
import html2canvas from "html2canvas";
import saveAs from "file-saver";

const StampMake = () => {
  const location = useLocation();

  // input
  // const [part, setPart] = useState(location.state.part);
  const [place, setPlace] = useState(location.state.place);
  const [desc, setDesc] = useState("");
  // const part = jejuData[]

  // ai
  const [imgUrl, setImgUrl] = useState("");

  const openai = new OpenAI({
    // apiKey: "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",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const generateImage = async () => {
    const image = await openai.images.generate({
      model: "dall-e-3",
      // prompt: "A cute baby sea otter",
      prompt: `${desc} 심플한 일러스트 형식 스탬프 이미지로 부탁해.`,
      // prompt: `당신은 유명 관광지의 스탬프를 디자인하는 디자이너입니다.
      // 주로 심플한 모양의 디자인을 하는 것으로 유명합니다.
      // 다음과 같은 조건으로 한국의 제주도에서 사용할 스탬프를 제작해주세요.
      // 제주도를 대표하는 의미로 스탬프에는 돌하르방을 넣어주세요.
      // 돌하르방은 변형되지 않은 형태로 보여져야 합니다.
      // 다만 어떠한 문자나 글자도 넣지 말아주세요. 스탬프 주제: [노란]
      // 스탬프 모양: [원형]
      // 스탬프 배경색: [흰색]`,
    });
    //제주도 성산일출봉에 다녀왔다. 추웠지만 노을이 예뻤다.
    setImgUrl(image.data[0].url);
  };

  const [isCalled, setIsCalled] = useState(false);
  const callDALLE = () => {
    console.log("callDALLE : ");

    if (place.length > 0 && desc.length > 0) {
      // BE SERVER
      const url = "https://kaf2ee4aac1d0a.user-app.krampoline.com/api/stamps";
      const data = {
        place: place,
        desc: desc,
      };
      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      // DALLE
      // generateImage();
      setIsCalled(true);
      setImgUrl(
        "https://marketplace.canva.com/EAFtiyO9dew/1/0/1600w/canva-black-and-white-modern-marketing-agency-round-stamp-business-logo-2U0FwG3yj7M.jpg"
      );
    }
  };

  // navigate
  const navigate = useNavigate();
  const moveToMap = () => {
    const part1 = ["탐나는 농장", "새별오름"];
    const part2 = ["동문시장", "도두봉"];
    const part3 = ["함덕서우봉", "에코랜드테마파크", "사려니숲길"];
    const part4 = ["유채꽃프라자", "동백포레스트", "휴애리자연생활공원"];
    const part5 = ["1100고지", "소천지"];
    const part6 = [
      "바이나흐튼 크리스마스박물관",
      "카멜리아힐",
      "산방산탄산온천",
    ];

    let part = 0;
    if (part1.includes(place)) {
      part = 1;
    } else if (part2.includes(place)) {
      part = 2;
    } else if (part3.includes(place)) {
      part = 3;
    } else if (part4.includes(place)) {
      part = 4;
    } else if (part5.includes(place)) {
      part = 5;
    } else if (part6.includes(place)) {
      part = 6;
    }

    navigate("/sticker", {
      state: { page: part, imgUrl: imgUrl, placeName: place, desc: desc },
    });
  };

  // download image
  const divRef = useRef(null);

  const handleDownload = async () => {
    if (!divRef.current) return;
    console.log(divRef.current);
    console.log("d", divRef.current.src);

    if (imgUrl.length > 0) {
      try {
        const div = divRef.current;
        const canvas = await html2canvas(div, { scale: 2 });
        canvas.toBlob((blob) => {
          if (blob !== null) {
            saveAs(blob, "result.png");
          }
        });
      } catch (error) {
        console.error("Error converting div to image:", error);
      }
    }
  };

  // return
  // 1. 생성 전
  if (imgUrl.length === 0 && !isCalled) {
    return (
      <S.Container>
        <S.AIContainer>
          <p className="text">
            방문장소와 소감을 작성하면
            <br />
            AI 스탬프가
            <br />
            쿵!
          </p>
          <center>
            <img
              src="/assets/images/preview.png"
              alt="preview"
              style={{ width: "11.87425rem" }}
            />
          </center>
        </S.AIContainer>
        <S.InputWhole>
          <S.InputContainer>
            <S.InputText>방문 장소</S.InputText>
            <S.PlaceDiv>
              <p className="text">{place}</p>
            </S.PlaceDiv>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputText>소감</S.InputText>
            <S.TextArea
              placeholder="장소를 방문한 소감을 작성해주세요"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </S.InputContainer>
        </S.InputWhole>
        <S.ButtonContainer>
          <Button onClick={callDALLE}>스탬프 추가하기</Button>
        </S.ButtonContainer>
        <S.GNBContainer>
          <GlobalNavigation nowPage={2} />
        </S.GNBContainer>
      </S.Container>
    );
  }

  // 2. 로딩
  if (isCalled && imgUrl.length === 0) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/images/loading.gif"
          alt="loading..."
          style={{ width: "7.375rem" }}
        />
      </div>
    );
  }

  // 3. 생성 완료
  if (isCalled && imgUrl.length > 0) {
    return (
      <S.Container>
        {/* <S.AIContainer> */}
        <ImageWrapper>
          <center>
            <img
              className="img"
              src={imgUrl}
              alt="img"
              ref={divRef}
              id="image"
            />
          </center>
        </ImageWrapper>
        {/* </S.AIContainer> */}
        <S.InputWhole>
          <S.InputContainer>
            <S.InputText>방문 장소</S.InputText>
            <S.PlaceDiv>
              <p className="text">{place}</p>
            </S.PlaceDiv>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputText value={desc}>소감</S.InputText>
            <S.TextArea
              placeholder="장소를 방문한 소감을 작성해주세요"
              value={desc}
            />
          </S.InputContainer>
        </S.InputWhole>
        <S.ButtonContainer>
          {/* {imgUrl.length ? ( */}
          <Button onClick={moveToMap}>지도에 스탬프 추가하기</Button>
          <Button onClick={handleDownload}>이미지 공유하기</Button>

          {/* ) : ( */}
          {/* <Button onClick={callDALLE}>스탬프 추가하기</Button> */}
          {/* )} */}
        </S.ButtonContainer>
        <S.GNBContainer>
          <GlobalNavigation nowPage={2} />
        </S.GNBContainer>
      </S.Container>
    );
  }
};

export default StampMake;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 4rem;
  margin-bottom: 2rem;
  padding: 2rem;
  width: 100vw;
  .img {
    width: 15.625rem;
    height: 15.625rem;
    border-radius: 50%;
  }
  .text {
    color: #343434;
    font-family: Pretendard;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.1875rem; /* 159.091% */
  }
`;
