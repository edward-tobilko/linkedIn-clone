import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  FC,
} from "react";

import type { IStateContext } from "../type-models";

export const Context = createContext<IStateContext | null>(null);

export const ContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [dialogUsers, setDialogUsers] = useState([
    {
      id: 7,
      name: "Anna Young",
      voice: {
        say: "Okay fine. thank you",
      },
      dataTime: "5 days ago",
    },
    {
      id: 1,
      name: "Sophia Lee",
      voice: {
        say: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      },
      dataTime: "3 days ago",
    },
    {
      id: 3,
      name: "Julia Cox",
      voice: {
        say: "Hi honey, how are you doing???? Long time no see. Where have you been?",
      },
      dataTime: "3 days ago",
    },
    {
      id: 8,
      name: "James Carter",
      voice: {
        say: "I gotta go",
      },
      dataTime: "4 hours ago",
    },
    {
      id: 5,
      name: "Richard Bell",
      voice: {
        say: "that s cool I wish I were you",
      },
      dataTime: "20 mins ago",
    },
    { id: 2, name: "John Doe", voice: { say: "ok" }, dataTime: "30 sec ago" },
  ]);
  const [chatUsers, setChatUsers] = useState([
    { id: 7, name: "Anna Young" },
    { id: 1, name: "Sophia Lee" },
    { id: 3, name: "Julia Cox" },
    { id: 8, name: "James Carter" },
    { id: 5, name: "Richard Bell" },
    { id: 2, name: "John Doe" },
  ]);
  const [searchUsers, setSearchUsers] = useState("");

  return (
    <Context.Provider
      value={{
        dialogUsers,
        chatUsers,
        searchUsers,
        setDialogUsers,
        setChatUsers,
        setSearchUsers,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => useContext(Context);
