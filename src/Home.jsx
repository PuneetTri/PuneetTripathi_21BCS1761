import React, { useState } from "react";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Details from "./components/Details/Details";

const Home = () => {
  const [contacts, setContacts] = useState([
    // Create place holder contacts here atleast 10
    {
      id: 1,
      username: "John Doe",
      userProfileImg: "https://picsum.photos/200",
      lastMessage: "Hi!",
      lastMessageTime: "12:00 AM",
      unreadMessages: 0,
    },
    {
      id: 2,
      username: "Jane Doe",
      userProfileImg: "https://picsum.photos/100",
      lastMessage: "Hi!",
      lastMessageTime: "11:53 PM",
      unreadMessages: 0,
    },
    {
      id: 3,
      username: "Will Smith",
      userProfileImg: "https://picsum.photos/300",
      lastMessage: "Hi!",
      lastMessageTime: "9:23 PM",
      unreadMessages: 0,
    },
    {
      id: 4,
      username: "Chris Evans",
      userProfileImg: "https://picsum.photos/250", // User avatar,
      lastMessage: "Hi!",
      lastMessageTime: "1:35 PM",
      unreadMessages: 0,
    },
    {
      id: 5,
      username: "Chris Rock",
      userProfileImg: "https://picsum.photos/500",
      lastMessage: "Hi!",
      lastMessageTime: "12:00 PM",
      unreadMessages: 0,
    },
  ]);

  const calls = [
    {
      id: 1,
      username: "John Doe",
      userProfileImg: "https://picsum.photos/200",
      status: "Recieved",
      call: true,
      time: "12:00",
    },
    {
      id: 2,
      username: "Jane Doe",
      userProfileImg: "https://picsum.photos/250",
      status: "Missed",
      call: false,
      time: "12:00",
    },
  ];

  const [messages, setMessages] = useState([]);

  const [currentPage, setCurrentPage] = useState("contacts");
  const [currentThread, setCurrentThread] = useState(contacts[0]);

  return (
    <div id="main">
      <Contacts
        data={contacts}
        calls={calls}
        setCurrentThread={setCurrentThread}
      />

      <Messages
        data={messages}
        setData={setMessages}
        intendedRecipient={123}
        currentThread={currentThread}
      />

      <Details currentThread={currentThread} />
    </div>
  );
};

export default Home;
