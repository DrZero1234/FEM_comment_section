import { styled } from "styled-components";
import { StyledComment } from "./Comment";

export const StyledCommentInput = styled(StyledComment)`
  textarea {
    resize: none;
    padding: 1em;
    line-height: 1.5rem;
  }

  textarea:hover {
    cursor: pointer;
  }

  button {
    height: max-content;
    padding: 1em 2em;
    border-radius: 0.75em;
    border: none;
    justify-self: end;
    background-color: ${({ theme }) => theme.colors.primary_400};
    color: ${({ theme }) => theme.colors.neutral_1000};
    font-weight: ${({ theme }) => theme.font_weights.bold};
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.mobile_size}) {
    grid-template-areas:
      "input input"
      "profile button";

    img {
      grid-area: profile;
    }

    textarea {
      grid-area: input;
    }

    button {
      grid-area: button;
    }
  }
`;
