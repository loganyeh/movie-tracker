
type FollowingProp = {
    img?: string;
    username?: string;
    status?: string;
    rating?: string;
}

function Following({ img, username, status, rating }: FollowingProp ){

    return(
        <>
            <div className="flex gap-2 flex-col">

                {/* following title */}
                <div className="text-gray-600 font-semibold">Following</div>

                {/* profile card */}
                <div className="pl-2 pr-4 py-2 flex justify-between items-center bg-white">

                    {/*  */}
                    <div className="flex gap-2 items-center">
                        <div className="h-8 w-8 bg-blue-400 rounded bg-center bg-cover"
                        style={{ backgroundImage: `url(${`hanni.jpg`})` }}>
                        </div>
                        <div className="text-sm text-gray-600 font-medium">{username || "Rukia"}</div>

                    </div>
                    
                    {/*  */}
                    <div className="flex gap-8 text-sm text-gray-600 font-light">
                        <div className="">{status || "Completed"}</div>
                        <div className="">{rating || "9/10"}</div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Following;