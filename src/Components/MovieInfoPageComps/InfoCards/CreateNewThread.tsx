import Header from "../../Header.js";
import Footer from "../../Footer.js";

function CreateNewThread(){
    const categoryNames = [
        "General", "Anime", "Manga", "Release Discussion", "News", "Music", "Gaming", "Visual Novels", 
        "Light Novels", "Forum Games", "Recommendations", "Site Feedback", "Bug Reports",
        "AniList Apps", "Misc"
    ]

    return(
        <>
            <Header />

            <div className="w-full max-w-7xl pt-8 p-5 flex gap-5 flex-col bg-gray-200">

                <div className="border bg-gray-50 p-1 px-4">Thread Title</div>

                <div className="border bg-gray-50 p-10 flex gap-4 flex-col">
                    <div className="border flex justify-around">
                        {Array.from({length: 10}).map((_, index) => {
                            return <div key={index}>0</div>
                        })}
                    </div>
                    <div className="border text-sm">Write Thread Body</div>
                </div>

                <div className="flex gap-2.5 flex-col text-gray-800">
                    <div className="text-sm font-medium">Categories</div>
                    <div className="flex gap-2 flex-col">
                        {categoryNames.map((cat, index) => {
                            return <div key={index} className="px-2.5 py-1.5 px-2 flex gap-2.5 bg-gray-50 rounded">
                                <input type="checkbox" className="accent-blue-400" />
                                <div className="text-xs font-medium">{cat}</div>
                            </div>
                        })}
                    </div>
                </div>

            </div>

            <Footer />
        
        </>
    )
}

export default CreateNewThread;