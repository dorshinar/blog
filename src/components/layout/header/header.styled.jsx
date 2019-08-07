import styled from "styled-components";
import { rhythm } from "../../../utils/typography";
import { Link } from "gatsby";
import Toggle from "react-toggle";

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rhythm(3)};
  background-color: ${props => props.theme.headerBackgroundColor};
  padding: ${rhythm(0.5)};
`;

export const Content = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${({ theme }) => theme.contentWidth};
`;

export const Title = styled.h1`
  margin-bottom: 0;
  color: ${props => props.theme.primary};
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
`;

export const StyledToggle = styled(Toggle)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
