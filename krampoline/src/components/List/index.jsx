import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const List = ({ place, desc, address }) => {
  const navigate = useNavigate();
  const moveTo = () => {
    navigate("/stamp-make", {
      state: {
        place: place,
      },
    });
  };
  return (
    <MainWrapper onClick={moveTo}>
      <div className="flex-row">
        <p className="place">{place}</p>
        <p className="desc">{desc}</p>
      </div>
      <p className="address">{address}</p>
    </MainWrapper>
  );
};

export default List;

const MainWrapper = styled.div`
  background: #fff;

  padding: 1rem 1.19rem;

  border-radius: 7px;
  border: 1px solid #f3f1f1;
  background: #fff;

  width: 90vw;

  display: flex;
  flex-direction: column;
  gap: 0.56rem;

  .flex-row {
    display: flex;
    flex-direction: row;
    gap: 0.63rem;

    border-bottom: 1px solid #f3f1f1;
  }
  .place {
    color: #343434;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    padding-bottom: 0.56rem;
  }
  .desc {
    color: #b6b6b6;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .address {
    color: #b6b6b6;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
