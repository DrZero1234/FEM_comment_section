import { styled } from "styled-components";
import { StyledComment } from "./Comment";

export const ReplyComment = styled(StyledComment)`
  grid-column: 2/3;
  @media (max-width: ${({ theme }) => theme.mobile_size}) {
    grid-template-columns: none;
  }
`;
