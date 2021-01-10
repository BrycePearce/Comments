import Comment from "./Comment/Comment";
import styled from "styled-components";

const Comments = () => {
  const CommentWrapper = styled.div`
    background-color: #222;
    padding: 1rem;
  `;

  return (
    <CommentWrapper>
      <Comment />
    </CommentWrapper>
  );
};

export default Comments;
