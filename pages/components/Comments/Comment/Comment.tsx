import styled from "styled-components";

const TEXT = {
  darkGray: "rgb(129, 131, 132)",
  lightGray: "#D7DADC",
};

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 400;
  min-height: 1.3rem;
  align-items: center;
  color: ${TEXT.lightGray};
  & > * :not(:last-child) {
    margin-right: 0.3rem;
  }
`;
const Author = styled.span`
  font-weight: 700;
`;
const Score = styled.span`
  color: ${TEXT.darkGray};

  ::after {
    content: "·";
    font-weight: 700;
    margin-left: 0.3rem;
  }
`;
const Timestamp = styled.time`
  color: ${TEXT.darkGray};
`;
const CommentText = styled.p`
  margin: 0;
  padding: 0.3rem 0;
  word-break: break-word;
  color: ${TEXT.lightGray};
`;
const Comment = () => {
  return (
    <article>
      <Header>
        <Author>Author</Author>
        <Score>9 points</Score>
        <Timestamp>13 hours ago</Timestamp>
      </Header>
      <CommentText>
        Howdy Howdy Howdy Howdy Howdy Howdy Howdy Howdy Howdy Howdy
      </CommentText>
    </article>
  );
};

export default Comment;
