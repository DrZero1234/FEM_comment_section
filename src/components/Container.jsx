import { StyledContainer } from "./styled/Container";
import { Comment } from "./Comment";
import { CommentInput } from "./CommentInput";

export const Container = ({ data }) => {
  const { comments, currentUser, id } = data;
  console.log(comments);
  return (
    <StyledContainer>
      {comments.map((comment) => (
        <>
          <Comment
            comment_data={comment}
            loggedInUser={currentUser}
          />
        </>
      ))}
      <CommentInput action="" currentUser={currentUser} />
    </StyledContainer>
  );
};
