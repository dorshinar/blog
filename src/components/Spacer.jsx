import styled from "styled-components";

const Spacer = styled.div`
  margin-top: ${(props) => props.top ?? 0};
  margin-bottom: ${(props) => props.bottom ?? 0};
  margin-right: ${(props) => props.right ?? 0};
  margin-left: ${(props) => props.left ?? 0};
`;

export default Spacer;
