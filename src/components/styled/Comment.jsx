import { styled } from "styled-components";

export const StyledComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    "vote user-data buttons"
    "vote content ."
    ". content .";
  grid-template-rows: auto;
  gap: 1em;
  padding: 1.5em;
  background-color: ${({ theme }) => theme.colors.neutral_1000};

  .comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-area: header;
  }

  .comment-actions,
  .user-data {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .user-data {
    grid-area: user-data;
  }

  .comment-actions {
    grid-area: buttons;
  }

  // Content text
  p {
    grid-area: content;
    line-height: 1.5rem;
  }

  // Username
  h1 {
    font-weight: ${({ theme }) => theme.font_weights.xbold};
  }

  // X time ago
  span {
    color: ${({ theme }) => theme.colors.neutral_500};
  }

  // You table if the comment is the logged in user´s
  h4 {
    background-color: ${({ theme }) => theme.colors.primary_400};
    color: ${({ theme }) => theme.colors.neutral_1000};
    font-weight: ${({ theme }) => theme.font_weights.xbold};
    padding: 0.15em 0.35em;
  }

  .action-btn {
    background-color: inherit;
    padding: 0.15em;
    display: flex;
    border: none;
    gap: 0.5em;
    font-weight: ${({ theme }) => theme.font_weights.xbold};
  }

  .action-btn:hover {
    cursor: pointer;
  }

  .action-btn.reply,
  .action-btn.edit {
    color: ${({ theme }) => theme.colors.primary_400};
  }
  .action-btn.delete {
    color: ${({ theme }) => theme.colors.primary_600};
  }

  @media (max-width: ${({ theme }) => theme.mobile_size}) {
    grid-template-areas:
      "user-data user-data"
      "content content"
      "vote buttons";
    grid-template-columns: repeat(2, 1fr);

    .comment-actions {
      justify-self: flex-end;
    }
  }
`;
