import { useParams } from "react-router-dom";

export const ChatUserPage = () => {
  const params = useParams();
  console.log(params);

  return <p>Hello</p>;
};
