import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import styled from "styled-components";

const Tooltip = ({ season }) => {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Info>?</Info>
        {/* <Button>Click me</Button> */}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text>
            안녕하수꽈! 제주도의 {season}에는 어디를 가야 할까 고민하시나요?
            {season}에 어울리는 제주도의 필수 스팟을 확인하고 방문해보세요 방문
            후 짧은 일기를 쓰면, 세상에 하나 뿐인 여행 스탬프가 완성됩니다
            특별한 제주도의 {season}, 나만의 스탬프로 기록해보세요!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Tooltip;

const Info = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  flex-shrink: 0;

  border-radius: 3.125rem;
  border: 1px solid #fff;
  background: #d9d9d9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  width: 90vw;

  border-radius: 0.4375rem;
  border: 1px solid #fff;
  background: rgba(235, 235, 235, 0.9);

  padding: 1rem;
`;
