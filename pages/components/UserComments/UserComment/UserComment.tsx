import Vote from "./Vote/Vote";
import styled from "styled-components";
import { Comment } from "../../../types/Comment";

const TEXT = {
  darkGray: "rgb(129, 131, 132)",
  lightGray: "#D7DADC",
};

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CommentBody = styled.article`
  margin-left: 0.3rem;
`;
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
const ChildrenWrapper = styled.div`
  margin-left: 2rem;
  margin-top: 0.5rem;
`;

interface UserCommentProps {
  comment: Comment;
}
const UserComment = ({ comment }: UserCommentProps) => {
  return (
    <>
      <CommentWrapper>
        <Vote />
        <CommentBody>
          <Header>
            <Author>{comment.author}</Author>
            <Score>{comment.score} points</Score>
            <Timestamp>{comment.created}</Timestamp>
          </Header>
          <CommentText>{comment.body}</CommentText>
        </CommentBody>
      </CommentWrapper>
      <ChildrenWrapper>
        {comment.children &&
          comment.children.map((child, key) => (
            <UserComment comment={child} key={key} />
          ))}
      </ChildrenWrapper>
    </>
  );
};

export default UserComment;
