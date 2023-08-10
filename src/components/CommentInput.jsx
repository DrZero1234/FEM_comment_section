import { StyledCommentInput } from "./styled/CommentInput";

export const CommentInput = ({ action, currentUser, text }) => {
  return (
    <StyledCommentInput>
      {currentUser.username ? (
        <>
          <img src={currentUser.image.webp} alt="Profile Picture" />
          <textarea
            placeholder="Add a comment..."
            defaultValue={action === "edit" ? text : ""}
            rows={5}
          />
          <button>Send</button>
        </>
      ) : (
        <h1>You need to sign in to comment</h1>
      )}
    </StyledCommentInput>
  );
};
