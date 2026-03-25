

function Tags(){
    const tagsData = [
        {tag: "Demons", percentage: "96"},
        {tag: "Shounen", percentage: "92"},
        {tag: "Swordplay", percentage: "88"},
        {tag: "Male Protangonist", percentage: "82"},
        {tag: "Vampire", percentage: "79"},
        {tag: "Tragedy", percentage: "78"},
        {tag: "Travel", percentage: "76"},
        {tag: "Primarily Teen Cast", percentage: "76"},
        {tag: "Monster Girl", percentage: "75"},
        {tag: "Revenge", percentage: "74"},
        {tag: "Orphan", percentage: "70"},
        {tag: "Gore", percentage: "67"},
        {tag: "CGI", percentage: "66"},
        {tag: "Primarily Male Cast", percentage: "65"},
        {tag: "Mythology", percentage: "65"},
        {tag: "Rural", percentage: "60"},
        {tag: "Historical", percentage: "58"},
        {tag: "Rotoscoping", percentage: "56"},
        {tag: "Body Horro", percentage: "54"},
        {tag: "Super Power", percentage: "54"},
        {tag: "Curses", percentage: "50"},
        {tag: "Chibi", percentage: "49"},
        {tag: "Time Skip", percentage: "41"},
        {tag: "Animals", percentage: "20"},
        {tag: "Food", percentage: "10"},
    ]

    return(
        <>
            <div className="h-auto w-2/3 mb-6">
                {/* Tag Header */}
                <div className="h-8 w-full mb-2 2xl:text-xl xl:text-lg font-normal text-gray-600">Tags</div>
                <div className="h-auto w-full mb-6">

                    {/* Tag Box */}
                    {tagsData.map((tag, index) => {
                        return <div key={index} className="2xl:h-10 xl:h-8 w-full flex mb-3 bg-white rounded shadow-md">
                            <div className="h-full w-1/2 pl-2 flex justify-start items-center 2xl:text-base xl:text-sm font-normal text-gray-600 overflow-visible whitespace-nowrap">{tag.tag}</div>
                            <div className="h-full w-1/2 pr-2 flex justify-end items-center font-light 2xl:text-base xl:text-sm text-gray-400">{tag.percentage}%</div>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default Tags;