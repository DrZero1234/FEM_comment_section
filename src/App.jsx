import { useState } from "react";
import viteLogo from "/vite.svg";
import { GlobalStyle } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import data from "./utils/data.json";
import { Container } from "./components/Container";

import { v4 as uuidv4 } from "uuid";
//Comment import
import { StyledComment } from "./components/styled/Comment";

// Vote import
import { StyledVoteButton } from "./components/styled/VoteButton";
import PlusIcon from "/assets/icon-plus.svg";
import MinusIcon from "/assets/icon-minus.svg";
import { StyledContainer } from "./components/styled/Container";
import { CommentWrapper } from "./components/styled/CommentWrapper";
import { StyledCommentInput } from "./components/styled/CommentInput";

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

function App() {
  const d = [JSON.parse(JSON.stringify(data))][0];

  const [comments, setComments] = useState(d);
  const [count, setCount] = useState(0);

  const addComment = () => {
    const id = uuidv4();
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container data={d} />
      </main>
    </ThemeProvider>
  );
}

export default App;
