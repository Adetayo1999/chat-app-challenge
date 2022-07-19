import React from "react";
import moment from "moment";

type ChatProps = {
    text: string;
    sender: string;
    isCurrentUser: boolean;
    time: string;
};

export const Chat = React.forwardRef(
    ({ text, sender, isCurrentUser, time }: ChatProps, ref: any) => {
        return (
            <div
                className={`flex  items-center mb-4 w-full  ${
                    isCurrentUser && "justify-items-end flex-row-reverse"
                }`}
                ref={ref}
                data-testid="chat-container">
                <div
                    className={`w-8 h-8  ${
                        isCurrentUser ? "ml-4" : "mr-4"
                    } overflow-hidden rounded-full`}>
                    <img
                        src={`https://avatars.dicebear.com/api/human/${sender}.svg`}
                        alt={sender}
                        title={sender}
                    />
                </div>
                <div>
                    <p
                        className={`${
                            isCurrentUser
                                ? "bg-gradient rounded-br-none text-slate-50"
                                : "bg-slate-200 rounded-bl-none text-slate-700"
                        } p-3  rounded cursor-pointer text-sm`}>
                        {text}
                    </p>
                    <small className="text-xs text-slate-300">
                        {moment(time).fromNow()}
                    </small>
                </div>
            </div>
        );
    }
);
