
type StaffCardProp = {
    profile_path: string;
    name: string;
    job: string;
}

function StaffCard({ profile_path, name, job }: StaffCardProp ){

    return(
        <>
            <div className="flex items-center bg-white rounded shadow">
                <div className="w-20 aspect-[3/4] bg-cover bg-center rounded-l"
                style={{ backgroundImage: `url(${`https://image.tmdb.org/t/p/original${profile_path}`})`}}></div>

                <div className="w-full p-2 flex gap-5 flex-col text-sm">
                    <div className="text-gray-600">{name || "Author"}</div>
                    <div className="text-gray-500">{job || "Original Creator"}</div>
                </div>
            </div>
        </>
    )
}

export default StaffCard;