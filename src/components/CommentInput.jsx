import { StyledCommentInput } from "./styled/CommentInput";
import { useRef, useState } from "react";

export const CommentInput = ({ action, currentUser, text }) => {
  const textRef = useRef("");
  const [currentText, setCurrentText] = useState(
    textRef.current.value
  );

  const handleChange = (e) => {
    setCurrentText(textRef.current.value);
    console.log(currentText);
  };

  return (
    <StyledCommentInput>
      {currentUser.username ? (
        <>
          <img src={currentUser.image.webp} alt="Profile Picture" />
          <textarea
            placeholder="Add a comment..."
            defaultValue={action === "edit" ? text : ""}
            rows={5}
            ref={textRef}
            onChange={(e) => handleChange(e)}
          />
          <button>Send</button>
        </>
      ) : (
        <h1>You need to sign in to comment</h1>
      )}
    </StyledCommentInput>
  );
};
