import UserComment from "./UserComment/UserComment";
import { Comment } from "../../types/Comment";
import styled from "styled-components";

const CommentWrapper = styled.div`
  background-color: #222;
  padding: 1rem;
`;

const UserComments = () => {
  const mockComments: Comment[] = [
    {
      author: "Author",
      body: "Wow great post comrade",
      created: "13 hours ago",
      score: 12,
      children: null,
    },
    {
      author: "StringMan",
      body: "Strings Strings Strings",
      created: "Just now",
      score: 12,
      children: [
        {
          author: "Another Author",
          body: "I agree comrade, very good post",
          created: "11 hours ago",
          score: 12,
          children: null,
        },
        {
          author: "Author Dude",
          body: "Yes. YES. yes...",
          created: "3 hours ago",
          score: 1,
          children: [
            {
              author: "SuperDude101",
              body: "So Cool...",
              created: "3 hours ago",
              score: 1,
            },
          ],
        },
        {
          author: "Arthur",
          body: "Having fun isn't hard, when you have a library card.",
          created: "24 hours ago",
          score: 3,
          children: null,
        },
      ],
    },
    {
      author: "Bugs",
      body: "What's up Doc",
      created: "Just now",
      score: 0,
      children: null,
    },
  ];

  return (
    <CommentWrapper>
      {mockComments.map((thread, key) => (
        <UserComment comment={thread} key={key} />
      ))}
    </CommentWrapper>
  );
};

export default UserComments;
