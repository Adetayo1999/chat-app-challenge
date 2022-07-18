type ChatInputProps = {
    chat: string;
    handleChat: (e: any) => void;
    handleChatSend: () => void;
};

function ChatInput({ chat, handleChat, handleChatSend }: ChatInputProps) {
    return (
        <div className="flex items-center">
            <input
                type="text"
                name=""
                value={chat}
                onChange={handleChat}
                className="flex-1 mr-4 h-10 rounded-md bg-slate-50 px-3 text-sm outline-none"
                placeholder="Enter a chat..."
            />
            <button
                type="button"
                className={`bg-slate-100 rounded-md h-10 px-3 text-slate-700 text-sm ${
                    !chat && "cursor-not-allowed"
                }`}
                disabled={!chat}
                onClick={handleChatSend}>
                Send
            </button>
        </div>
    );
}

export default ChatInput;
