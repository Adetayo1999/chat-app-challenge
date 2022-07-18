import React, { useCallback, useState } from "react";
import { Chat } from "./components/chat";
import ChatInput from "./components/chat-input";

function App() {
    const [username] = useState("omotomiwa");
    const [chat, setChat] = useState("");
    const [messages] = useState([
        {
            id: 1,
            sender: "omotomiwa",
            text: "Hey there ",
        },
        {
            id: 2,
            sender: "james",
            text: "I'm good and you ?",
        },
        {
            id: 3,
            sender: "omotomiwa",
            text: "fine",
        },
    ]);

    const handleChat = (e: any) => {
        setChat(e.target.value);
    };

    const handleChatSend = useCallback(() => {
        console.log("chat", chat);
    }, [chat]);

    return (
        <div className="h-screen flex justify-center items-center bg-slate-100 overflow-hidden">
            <div className=" w-[60%] md:w-[40%]  relative h-[70%] mx-auto  bg-white rounded-md  overflow-hidden shadow-md">
                <div className="px-5 py-4 flex items-center bg-gradient">
                    <div className="w-12 h-12  mr-6 overflow-hidden border-2 border-slate-50 rounded-full ">
                        <img
                            src={`https://avatars.dicebear.com/api/human/${username}.svg`}
                            alt={`${username}`}
                        />
                    </div>
                    <h4 className="text-slate-100 text-lg font-medium">
                        {username}
                    </h4>
                </div>
                <div className="w-full flex flex-col px-4 py-2">
                    {messages.map(({ text, id, sender }) => (
                        <Chat
                            text={text}
                            key={id}
                            sender={sender}
                            isCurrentUser={sender === username}
                        />
                    ))}
                </div>
                <div className="absolute bg-gradient px-4 py-2 bottom-0 left-0 w-full">
                    <ChatInput
                        chat={chat}
                        handleChat={handleChat}
                        handleChatSend={handleChatSend}
                    />
                </div>
            </div>
        </div>
    );
}
export default App;
