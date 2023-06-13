import { useState } from "react";

import { DialogUsersStyle } from "./dialogUsersStyle";

import { DialogUser } from "./DialogUser";

export const DialogUsers = () => {
  const [dialogUsers, setDialogUsers] = useState([
    {
      id: 7,
      name: "Anna Young",
      say: "Okay fine. thank you",
      dataTime: "3 days ago",
    },
    {
      id: 1,
      name: "Sophia Lee",
      say: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      dataTime: "30 sec ago",
    },
    {
      id: 3,
      name: "Julia Cox",
      say: "Hi honey, how are you doing???? Long time no see. Where have you been?",
      dataTime: "3 days ago",
    },
    { id: 8, name: "James Carter", say: "I gotta go", dataTime: "20 min ago" },
    {
      id: 5,
      name: "Richard Bell",
      say: "that s cool I wish I were you",
      dataTime: "4 hour ago",
    },
    { id: 2, name: "John Doe", say: "ok :)", dataTime: "23 days ago" },
  ]);

  return (
    <DialogUsersStyle>
      {dialogUsers.map((dialogUser) => (
        <DialogUser key={dialogUser.id} dialogUser={dialogUser} />
      ))}
    </DialogUsersStyle>
  );
};