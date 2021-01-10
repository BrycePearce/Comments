import styled from "styled-components";

const TEXT = {
  darkGray: "rgb(129, 131, 132)",
};

const Comment = () => {
  const Header = styled.header`
    font-size: 12px;
    font-weight: 400;
    color: #d7dadc;
    & > * :not(:last-child) {
      margin-right: 0.3rem;
    }
  `;
  const CollapseBtn = styled.button`
    all: unset;
    cursor: pointer;
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

  return (
    <article>
      <Header>
        <CollapseBtn>[–]</CollapseBtn>
        <Author>Author</Author>
        <Score>9 points</Score>
        <Timestamp>13 hours ago</Timestamp>
      </Header>
    </article>
  );
};

export default Comment;
