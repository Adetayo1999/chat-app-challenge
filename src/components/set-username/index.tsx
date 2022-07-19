import { useState } from "react";

type SetUsernameProps = {
    handleUsername: (text: string) => void;
};

export function SetUsername({ handleUsername }: SetUsernameProps) {
    const [text, setText] = useState("");

    return (
        <div className="px-6 py-4">
            <h2 className="text-slate-500 font-semibold mb-3">
                Choose A Username
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-2">
                    <input
                        type="text"
                        name="text-input"
                        id="text-input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter username..."
                        className="w-full h-10 px-2 py-2 rounded-md bg-slate-100 text-sm focus:ring-opacity-30  focus:ring-4 focus:ring-blue-500 outline-none transition duration-150"
                        data-testid="username-input"
                    />
                </div>
                <button
                    type="submit"
                    disabled={!text}
                    onClick={() => handleUsername(text)}
                    className="text-sm h-10 bg-gradient px-3 py-1 flex justify-center items-center rounded text-gray-50">
                    Submit
                </button>
            </form>
        </div>
    );
}
