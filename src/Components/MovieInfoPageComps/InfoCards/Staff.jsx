import StaffCard from "./StaffCard";

function Staff({ data }){

    const staffData = [
        { img: "placeholder//", name: "Koyoharu Gotogue", role: "Original Creator"},
        { img: "placeholder//", name: "Haruo Sotozaki", role: "Director"},
        { img: "placeholder//", name: "Akira Matsushima", role: "Character Design"},
        { img: "placeholder//", name: "Youko Kajiyama", role: "Sub Character Design"},
    ]

    return(
        <>
            <div className="flex gap-3 flex-col">
                <div className="text-gray-600 font-semibold">Staff</div>
                <div className="flex gap-4 flex-col ">
                    {/* card */}
                    {data?.crew?.slice(0, 4)?.map((data, index) => {
                        return <StaffCard key={index} data={data} />
                    })}
                </div>

            </div>
        </>
    )
}

export default Staff;