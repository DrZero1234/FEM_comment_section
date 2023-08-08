import { styled } from "styled-components";

export const StyledVoteButton = styled.div`
  grid-area: vote;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-radius: 1em;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.neutral_900};
  color: ${({ theme }) => theme.colors.primary_400};
  font-weight: ${({ theme }) => theme.font_weights.xbold};

  svg {
    fill: #c5c6ef;
  }
  svg:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.neutral_300};
  }

  @media (max-width: ${({ theme }) => theme.mobile_size}) {
    flex-direction: row;
    width: max-content;
    padding: 1em;
  }
`;
