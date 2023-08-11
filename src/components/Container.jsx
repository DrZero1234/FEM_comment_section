import { StyledContainer } from "./styled/Container";
import { Comment } from "./Comment";
import { CommentInput } from "./CommentInput";
import { CommentWrapper } from "./styled/CommentWrapper";
import { useRef } from "react";

export const Container = ({ data }) => {
  const { comments, currentUser, id } = data;
  console.log(comments);
  return (
    <StyledContainer>
      {comments.map((comment) => (
        <>
          <CommentWrapper>
            <Comment
              comment_data={comment}
              loggedInUser={currentUser}
            />
          </CommentWrapper>
        </>
      ))}
      <CommentInput
        action="new"
        currentUser={currentUser}
        comments={comments}
      />
    </StyledContainer>
  );
};
