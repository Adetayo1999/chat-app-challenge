type UserPropsType = {
    username: string;
};

export function User({ username }: UserPropsType) {
    return (
        <div className="px-5 py-4 flex items-center bg-gradient">
            <div className="w-12 h-12  mr-6 overflow-hidden border-2 border-slate-50 rounded-full ">
                <img
                    src={`https://avatars.dicebear.com/api/human/${username}.svg`}
                    alt={`${username}`}
                />
            </div>
            <h4 className="text-slate-100 text-lg font-medium">{username}</h4>
        </div>
    );
}
