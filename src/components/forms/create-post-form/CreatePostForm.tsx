import { useState, ChangeEvent, MouseEvent } from "react";
import { v4 as uniqueID } from "uuid";

import { AvatarImgStyle } from "../../../rootStyles";
import { CreatePostFormStyle, TextareaStyle } from "./createPostFormStyle";

import { useMyContext } from "../../../context/Context";
import { CreatePostBtn } from "../../UI/btns/CreatePostBtn";

import { IPostsUser } from "../../../type-models";

export const CreatePostForm = () => {
  const [newPost, setNewPost] = useState<IPostsUser[] | any>({
    company: {
      // name: "Frontend",
      bs: "",
      // catchPhrase: "Web developer",
    },
  });

  const props = useMyContext();

  function createNewPost(post: string | any) {
    props?.setUsers([...props.users, post]);
  }

  function addNewPost(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    let myNewPost = {
      ...newPost,
      id: uniqueID(),
      name: "eduard.tobilko",
      username: "",
      email: "email@gmail.com",
      address: {
        street: "Academic queen str.",
        suite: "",
        city: "Cherkasy",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "38-073-234-56-11",
      website: "",
    };

    createNewPost(myNewPost);
    setNewPost({ company: { bs: "" } });
  }

  return (
    <CreatePostFormStyle>
      <AvatarImgStyle
        src="./images/avatar.png"
        alt="Avatar"
        width="50px"
        height="50px"
      />
      <TextareaStyle
        type="text"
        name="text"
        value={newPost.company.bs}
        placeholder="Add new post"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewPost({
            ...newPost,
            company: {
              catchPhrase: "Web developer",
              name: "Frontend",
              bs: e.target.value,
            },
          })
        }
        autoComplete="off"
      />

      <CreatePostBtn addNewPost={addNewPost}>Add post</CreatePostBtn>
    </CreatePostFormStyle>
  );
};
