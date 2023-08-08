import { useState } from "react";
import viteLogo from "/vite.svg";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import data from "./utils/data.json";

//Comment import
import { StyledComment } from "./components/styled/Comment";

// Vote import
import { StyledVoteButton } from "./components/styled/VoteButton";
import PlusIcon from "/assets/icon-plus.svg";
import MinusIcon from "/assets/icon-minus.svg";
import { StyledContainer } from "./components/styled/Container";
import { ReplyComment } from "./components/styled/ReplyComment";
import { CommentWrapper } from "./components/styled/CommentWrapper";

const theme = {
  colors: {
    primary_400: "hsl(238, 40%, 52%)",
    primary_600: "hsl(358, 79%, 66%)",
    primary_800: "hsl(239, 57%, 85%)",
    primary_900: "hsl(357, 100%, 86%)",

    neutral_300: "hsl(212, 24%, 26%)",
    neutral_500: "hsl(211, 10%, 45%)",
    neutral_800: "hsl(223, 19%, 93%)",
    neutral_900: "hsl(228, 33%, 97%)",
    neutral_1000: "hsl(0, 0%, 100%)",
  },
  font_weights: {
    normal: 400,
    bold: 500,
    xbold: 700,
  },

  mobile_size: "35em",
};

/* MOCK DATA
    {
  "currentUser": {
    "image": { 
      "png": "assets/avatars/image-juliusomo.png",
      "webp": "assets/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "assets/avatars/image-amyrobson.png",
          "webp": "assets/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "assets/avatars/image-maxblagun.png",
          "webp": "assets/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "assets/avatars/image-ramsesmiron.png",
              "webp": "assets/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "assets/avatars/image-juliusomo.png",
              "webp": "assets/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}
*/

const MOCK_COMMENT = [JSON.parse(JSON.stringify(data))][0].comments;
const MOCK_DATA = [JSON.parse(JSON.stringify(data))][0];

const Container = ({ data }) => {
  const { comments, currentUser } = data;
  console.log(comments);
  return (
    <StyledContainer>
      {comments.map((comment) => (
        <Comment data={comment} loggedInUser={currentUser} />
      ))}
    </StyledContainer>
  );
};

const Comment = ({ data, loggedInUser }) => {
  const { user, createdAt, replies } = data;
  console.log(replies);
  return (
    <CommentWrapper>
      <StyledComment>
        <div className="user-data">
          <img src={user.image.webp} alt="Commenter´s profile picture" />
          <h1>{user.username}</h1>
          {loggedInUser.username === user.username && <h4>you</h4>}
          <span>{createdAt}</span>
        </div>
        <div className="comment-actions">
          {/* If the comment is NOT from the signed in user */}
          {loggedInUser.username != user.username ? (
            <button className="action-btn reply">
              <img src="assets/icon-reply.svg" />
              Reply
            </button>
          ) : (
            <>
              <button className="action-btn delete">
                <img src="assets/icon-delete.svg" />
                Delete
              </button>
              <button className="action-btn edit">
                <img src="assets/icon-edit.svg" />
                Edit
              </button>
            </>
          )}
        </div>
        <p>{data.content}</p>
        <VoteButton comment={data} />
      </StyledComment>
      {replies &&
        replies.map((reply) => (
          <ReplyComment>
            <Comment data={reply} loggedInUser={MOCK_DATA.currentUser} />
          </ReplyComment>
        ))}
    </CommentWrapper>
  );
};

const CommentInput = ({ action }) => {};

const VoteButton = ({ comment }) => {
  const { score } = comment;
  return (
    <StyledVoteButton>
      {/* Plus button */}
      <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
      </svg>
      <h2>{comment.score}</h2>
      {/* Minus icon */}
      <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
      </svg>
    </StyledVoteButton>
  );
};

function App() {
  const d = [JSON.parse(JSON.stringify(data))][0];

  const [comments, setComments] = useState(d);
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container data={MOCK_DATA} />
      </main>
    </ThemeProvider>
  );
}

export default App;
