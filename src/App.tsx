import { useCallback, useState, useEffect, useRef } from "react";
import { Chat } from "./components/chat";
import { ChatInput } from "./components/chat-input";
import { SetUsername } from "./components/set-username";
import { User } from "./components/user";

type MessageType = {
    id: number;
    text: string;
    sender: string;
    time: string;
};

function App() {
    const [username, setUsername] = useState("");
    const [chat, setChat] = useState("");
    const [messages, setMessages] = useState<MessageType[]>(
        JSON.parse(localStorage.getItem("chat-messages") || "[]")
    );

    const lastMessageRef: any = useRef();

    const handleChat = (e: any) => {
        setChat(e.target.value);
    };

    const handleUsername = (text: string) => setUsername(text);

    const handleChatSend = useCallback(() => {
        const newChat = {
            id: messages.length + 1,
            text: chat,
            sender: username,
            time: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, newChat]);
        const localDBMessages: MessageType[] = JSON.parse(
            localStorage.getItem("chat-messages") || "[]"
        );
        localDBMessages.push(newChat);
        localStorage.setItem("chat-messages", JSON.stringify(localDBMessages));
        setChat("");
    }, [chat]);

    useEffect(() => {
        const handleNewChats = (e: StorageEvent) => {
            setMessages(JSON.parse(e.newValue || "[]"));
        };
        window.addEventListener("storage", handleNewChats);
        return () => {
            window.removeEventListener("storage", handleNewChats);
        };
    }, []);

    useEffect(() => {
        if (
            lastMessageRef &&
            lastMessageRef.current &&
            lastMessageRef?.current?.scrollIntoView
        ) {
            lastMessageRef?.current?.scrollIntoView({ behaviour: "smooth" });
        }
    }, [messages]);

    return (
        <div className="h-screen flex justify-center items-center bg-slate-100 overflow-hidden">
            <div className=" w-[60%] md:w-[40%]  relative h-[70%] mx-auto  bg-white rounded-md  overflow-hidden shadow-md">
                {username ? (
                    <>
                        <User username={username} />
                        <div className="w-full flex flex-col px-4 py-2 h-[70%] overflow-y-scroll messages__container">
                            {messages.map(({ text, id, sender, time }) => (
                                <Chat
                                    text={text}
                                    key={id}
                                    ref={lastMessageRef}
                                    sender={sender}
                                    isCurrentUser={sender === username}
                                    time={time}
                                />
                            ))}
                            {messages.length === 0 && (
                                <p className="text-center text-slate-300 text-lg">
                                    No messages yet...
                                </p>
                            )}
                        </div>
                        <div className="absolute bg-gradient px-4 py-2 bottom-0 left-0 w-full">
                            <ChatInput
                                chat={chat}
                                handleChat={handleChat}
                                handleChatSend={handleChatSend}
                            />
                        </div>
                    </>
                ) : (
                    <SetUsername handleUsername={handleUsername} />
                )}
            </div>
        </div>
    );
}
export default App;
