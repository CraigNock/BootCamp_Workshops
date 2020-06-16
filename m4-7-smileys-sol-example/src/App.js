import React from "react";
import styled from "styled-components";
import Button from "./Button";

const App = () => {
  const [status, setStatus] = React.useState("unknown");
  const [translate, setTranslate] = React.useState(false);

  const handleSetStatus = val => {
    setStatus(val);
  };

  const handleSetTranslate = () => {
    setTranslate(!translate);
  };

  return (
    <Wrapper>
      <Button
        bg="hotpink"
        handleSetStatus={handleSetStatus}
        handleSetTranslate={handleSetTranslate}
      >
        hello
      </Button>
      <Button
        bg="gold"
        handleSetStatus={handleSetStatus}
        handleSetTranslate={handleSetTranslate}
      >
        goodbye
      </Button>
      <Emoji
        style={{ transform: `translateY(${translate ? "1000px" : "0px"})` }}
      >
        <span>
          {status === "hello" ? "🙂" : status === "goodbye" ? "🙁" : "🤨"}
        </span>
      </Emoji>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const Emoji = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  font-size: 150px;
  transition: transform 500ms;
`;

export default App;
