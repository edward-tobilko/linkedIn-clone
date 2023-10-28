import { FC, useState, useEffect } from "react";

import { SettingStyle } from "./settingStyle";
import { useFetching } from "../../hooks/useFetching";
import { useTypeDispatch } from "../../hooks/useTypeSelector";
import { useParams } from "react-router-dom";
import { fetchCurrentUserPageTC } from "../../redux/reducers/profile-reducer/profileReducer";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Post() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState(null);

  let { userId } = useParams() as any;

  if (!userId) {
    userId = 29793;
  }

  const dispatch = useTypeDispatch();

  const { fetching } = useFetching(async () => {
    dispatch(fetchCurrentUserPageTC(userId));
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          setError(err);
        }
      });

    //? Функцію очищення хука useEffect, щоб запобігти витоку пам'яті та оптимізувати роботу додатків. Тобто, ми повинні при натисканні на "showPosts" або встановити стан кнопки "disable" або робити очищення еффекта "useEffect", щоб не переривати надсилання на сервер першого запиту.
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    fetching();
  }, [dispatch, userId]);

  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <ul key={post.id}>
            <li>
              <span> {post.id}. </span>
              {post.title}
            </li>
          </ul>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

const Setting: FC = () => {
  const [showPosts, setShowPosts] = useState(false);

  const showPostsHandler = () => {
    setShowPosts(!showPosts);
  };

  return (
    <SettingStyle>
      <button onClick={showPostsHandler}>Show Posts</button>

      {showPosts && <Post />}
    </SettingStyle>
  );
};

export default Setting;
