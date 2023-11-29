import { FC, useEffect, useState } from "react";

import { GitHubUserDetailsType, TimerType, UsersType } from "./gitHubTypes";

import { instance } from "./gitHubApi";

import { GitHubUserDetailsLoader } from "../../components/UI/loaders/gitHub-loaders/GitHubUserDetailsLoader";

const Timer: FC<TimerType> = ({
  setUserDetails,
  seconds,
  setSeconds,
  timerKey,
}) => {
  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds((prev: any) => {
        console.log("TICK");

        if (prev === 0) {
          //? Обнуляємо інтервал та зануляємо деталі користувача
          clearInterval(intervalID);
          setUserDetails(null);

          return prev;
        } else {
          return prev - 1;
        }
      });
    }, 1000);

    return () => {
      // Clean-up function
      clearInterval(intervalID);
    };
  }, [timerKey]); //? Залежність для того, щоб при переході на іншого користувача setInterval обнулявся

  return <div> {seconds > 0 && seconds} </div>;
};

const GitHubUserDetails: FC<GitHubUserDetailsType> = ({ selectedUser }) => {
  const initialStartSeconds = 1000;

  const [userDetails, setUserDetails] = useState<UsersType | null>(null);
  const [seconds, setSeconds] = useState(initialStartSeconds);
  const [gitHubUserDetailsLoading, setGitHubUserDetailsLoading] =
    useState(false);

  useEffect(() => {
    if (selectedUser) {
      setGitHubUserDetailsLoading(true);

      instance.get<UsersType>(`users/${selectedUser?.login}`).then((res) => {
        setUserDetails(res.data);

        //? При переході на іншого користувача сетаємо заново 10 сек.
        setSeconds(initialStartSeconds);

        setGitHubUserDetailsLoading(false);
      });
    }
  }, [selectedUser]);

  return (
    <>
      {gitHubUserDetailsLoading ? (
        <GitHubUserDetailsLoader />
      ) : (
        <>
          {userDetails && (
            <>
              <Timer
                setUserDetails={setUserDetails}
                seconds={seconds}
                setSeconds={setSeconds}
                timerKey={userDetails.id.toString()}
              />

              <img
                src={
                  userDetails?.avatar_url
                    ? userDetails?.avatar_url
                    : "https://place-hold.it/300"
                }
                alt=""
              />
              <br />
              <h2>{userDetails?.name}</h2>
              <p>Followers: {userDetails?.followers}</p>
              <p>Location: {userDetails?.location}</p>
              <p>Repositories: {userDetails?.public_repos}</p>
              <p>Following: {userDetails?.following}</p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default GitHubUserDetails;
