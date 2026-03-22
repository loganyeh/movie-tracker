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
            <div className="min-h-40 w-11/12 mb-6">

                <div className="h-10 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Staff</div>
                <div className="h-auto w-full flex flex-wrap justify-start items-center">

                    {/* card */}
                    {data?.crew?.slice(0, 3)?.map((data, index) => {
                        return <StaffCard key={index} data={data} />
                    })}


                    
                </div>

            </div>
        </>
    )
}

export default Staff;