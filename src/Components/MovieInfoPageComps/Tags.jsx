

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
            <div className="flex gap-2 flex-col">

                {/* Tag Header */}
                <div className="text-gray-600 font-semibold">Tags</div>

                <div className="flex gap-3 flex-col">
                    {/* Tag Box */}
                    {tagsData.map((tag, index) => {
                        return <div key={index} className="p-2 flex justify-between items-center bg-white rounded shadow">
                            <div className="text-sm text-gray-600 overflow-visible whitespace-nowrap">{tag.tag}</div>
                            <div className="font-light text-xs text-gray-400">{tag.percentage}%</div>
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Tags;