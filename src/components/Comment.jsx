import { CommentWrapper } from "./styled/CommentWrapper";
import { StyledComment } from "./styled/Comment";
import { VoteButton } from "./VoteButton";
import { useState } from "react";
import { CommentInput } from "./CommentInput";

export const Comment = ({ comment_data, loggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");

  const handleClick = (action) => {
    if (isOpen) {
      setIsOpen(false);
      setAction("");
    } else {
      setIsOpen(true);
      setAction(action);
    }
  };

  const { user, createdAt, replies, content, id } = comment_data;
  const { username } = loggedInUser;
  return (
    <>
      <StyledComment>
        <div className="user-data">
          <img
            src={user.image.webp}
            alt="Commenter´s profile picture"
          />
          <h1>{user.username}</h1>
          {loggedInUser.username === user.username && <h4>you</h4>}
          <span>{createdAt}</span>
        </div>
        <div className="comment-actions">
          {/* If the comment is NOT from the signed in user */}
          {username != user.username ? (
            <button
              className="action-btn reply"
              onClick={() => handleClick("reply")}
            >
              <img src="assets/icon-reply.svg" />
              Reply
            </button>
          ) : (
            <>
              <button className="action-btn delete">
                <img src="assets/icon-delete.svg" />
                Delete
              </button>
              <button
                className="action-btn edit"
                onClick={() => handleClick("edit")}
              >
                <img src="assets/icon-edit.svg" />
                Edit
              </button>
            </>
          )}
        </div>
        <div className="content-wrapper">
          {action === "edit" ? (
            <CommentInput
              text={content}
              action={action}
              currentUser={loggedInUser}
            />
          ) : (
            <p>{content}</p>
          )}
        </div>

        <VoteButton comment={comment_data} />
      </StyledComment>
      {action === "reply" && (
        <CommentInput action={action} currentUser={loggedInUser} />
      )}
      {replies &&
        replies.map((reply) => (
          <Comment comment_data={reply} loggedInUser={loggedInUser} />
        ))}
    </>
  );
};
