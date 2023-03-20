import { Svg } from "components";
import styled from "styled-components";

export const Cart: React.FC = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <Svg src="arrowInBlackCircle" alt="Cart icon"></Svg>
      </IconWrapper>
      <Text>Cart (0)</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 159px;
  height: 66px;
  border: 1px solid #e0e0e0;
  border-radius: 33px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-left: 6px;
  border-radius: 56px;
  background: #274c5b;
`;

const Text = styled.div`
  margin-left: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #274c5b;
`;
