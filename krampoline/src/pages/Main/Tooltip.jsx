import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import { useRef } from "react";

const Tooltip = ({ season }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Info>?</Info>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text>
            1. {season}에 어울리는 제주의 필수 스팟을 확인, 방문해보세요
            <br />
            2. 방문 후 짧은 기록으로, 하나 뿐인 여행 스탬프가 완성!
            <br />
            3. 특별한 제주의 {season}, 나만의 스탬프로 기록해보세요
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
    // <div style={{ width: "80vw" }}>
    //   <Info onClick={onOpen}>?</Info>
    //   <AlertDialog
    //     isOpen={isOpen}
    //     leastDestructiveRef={cancelRef}
    //     onClose={onClose}
    //   >
    //     <AlertDialogOverlay backdropFilter="blur(0.1px)">
    //       <AlertDialogContent>
    //         <AlertDialogBody>
    //           1. {season}에 어울리는 제주의 필수 스팟을 확인, 방문해보세요
    //           <br />
    //           2. 방문 후 짧은 기록으로, 하나 뿐인 여행 스탬프가 완성!
    //           <br />
    //           3. 특별한 제주의 {season}, 나만의 스탬프로 기록해보세요
    //         </AlertDialogBody>

    //         <AlertDialogFooter></AlertDialogFooter>
    //       </AlertDialogContent>
    //     </AlertDialogOverlay>
    //   </AlertDialog>
    // </div>
  );
};

export default Tooltip;

const Info = styled.div`
  width: 1.875rem;
  height: 1.875rem;

  flex-shrink: 0;
  background-color: #fff;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  color: #70a597;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  width: 80vw;

  border-radius: 0.625rem;
  background: #fff;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  padding: 1rem;

  color: #000;
  font-family: Pretendard;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 240% */
`;
