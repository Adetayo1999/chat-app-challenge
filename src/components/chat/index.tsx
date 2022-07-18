type ChatProps = {
    text: string;
    sender: string;
    isCurrentUser: boolean;
};

export function Chat({ text, sender, isCurrentUser }: ChatProps) {
    return (
        <div
            className={`flex  items-center mb-4 w-full  ${
                isCurrentUser && "justify-items-end flex-row-reverse"
            }`}>
            <div
                className={`w-8 h-8  ${
                    isCurrentUser ? "ml-4" : "mr-4"
                } overflow-hidden rounded-full`}>
                <img
                    src={`https://avatars.dicebear.com/api/human/${sender}.svg`}
                    alt={sender}
                />
            </div>
            <div
                className={`${
                    isCurrentUser
                        ? "bg-gradient rounded-br-none text-slate-50"
                        : "bg-slate-200 rounded-bl-none text-slate-700"
                } p-3  rounded cursor-pointer`}>
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );
}
