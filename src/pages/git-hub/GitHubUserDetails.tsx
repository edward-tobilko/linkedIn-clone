import { FC, useEffect, useState } from "react";

import { GitHubUserDetailsType, TimerType, UsersType } from "./gitHubTypes";

import { instance } from "./gitHubApi";

const Timer: FC<TimerType> = ({ setUserDetails, seconds, setSeconds }) => {
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
  }, []);

  return <div> {seconds > 0 && seconds} </div>;
};

const GitHubUserDetails: FC<GitHubUserDetailsType> = ({ selectedUser }) => {
  const initialStartSeconds = 3;

  const [userDetails, setUserDetails] = useState<UsersType | null>(null);
  const [seconds, setSeconds] = useState(initialStartSeconds);

  useEffect(() => {
    if (selectedUser) {
      instance.get<UsersType>(`users/${selectedUser?.login}`).then((res) => {
        setUserDetails(res.data);

        //? При переході на іншого користувача сетаємо заново 10 сек.
        setSeconds(initialStartSeconds);
      });
    }
  }, [selectedUser]);

  return (
    <div>
      {userDetails && (
        <>
          <Timer
            setUserDetails={setUserDetails}
            seconds={seconds}
            setSeconds={setSeconds}
          />

          <img src={userDetails?.avatar_url} alt="" />
          <br />
          <h2>{userDetails?.name}</h2>
          <p>Followers: {userDetails?.followers}</p>
          <p>Location: {userDetails?.location}</p>
          <p>Repositories: {userDetails?.public_repos}</p>
          <p>Following: {userDetails?.following}</p>
        </>
      )}
    </div>
  );
};

export default GitHubUserDetails;
