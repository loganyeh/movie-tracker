import Header from "../../Header.js";
import Footer from "../../Footer.js";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ThreadApi } from "./Thread.js";

type EditThreadProp = {
    
}

function EditThread(){
    const categoryNames = [
        "General", "Anime", "Manga", "Release Discussion", "News", "Music", "Gaming", "Visual Novels", 
        "Light Novels", "Forum Games", "Recommendations", "Site Feedback", "Bug Reports",
        "AniList Apps", "Misc"
    ]

    const [threadTitle, setThreadTitle] = useState<string>("");
    const [threadBody, setThreadBody] = useState<string>("");

    const { id } = useParams();

    const [thread, setThread] = useState<ThreadApi>();

    // 1. get existing data
    useEffect(() => {
        async function fetchThread() {
            const res = await fetch(`http://localhost:3000/threads/${id}`);
            const data = await res.json();
            setThread(data);
        }

        fetchThread();
    }, [id]);

    // 2. update function (same page)
    async function updateThread() {
        await fetch(`http://localhost:3000/threads/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(thread)
        });
    }

    if (!thread) return <div>Loading...</div>;

    return(
        <>
            <Header />

            <div className="flex justify-center bg-gray-200">

                <div className="w-full 2xl:max-w-[1800px] pt-8 p-5 md:p-8 pb-16 xl:px-12 xl:pb-96 flex gap-5 xl:gap-10 flex-col xl:flex-row xl:items-start bg-gray-200">

                    <div className="xl:w-full xl:max-w-2xl flex gap-5 flex-col shrink-0">
                        {/* Thread Title */}
                        <input onChange={(e) => {setThread({...thread, name: e.target.value})}} value={thread.name} type="text" className="bg-gray-50 p-1 px-4 rounded focus:outline-none" placeholder="Thread Title"/>

                        {/* Write Thread Body */}
                        <div className="bg-gray-50 p-10 flex gap-8 flex-col rounded">
                            <div className="flex justify-between">
                                {Array.from({length: 14}).map((_, index) => {
                                    return <i key={index} className='bx bx-bold text-lg text-gray-500'></i>
                                })}
                            </div>
                            <input onChange={(e) => {setThread({...thread, thread: e.target.value})}} value={thread.thread} type="text" className="text-sm font-light focus:outline-none" placeholder="Write thread body"/>
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2.5 flex-col text-gray-800">
                            <div className="text-sm font-medium">Categories</div>
                            <div className="flex gap-2 xl:gap-3.5 flex-col xl:grid xl:grid-cols-3">
                                {categoryNames.map((cat, index) => {
                                    return <div key={index} className="px-2.5 py-1.5 px-2 flex gap-2.5 bg-gray-50 rounded">
                                        <input type="checkbox" className="accent-blue-400" />
                                        <div className="text-xs font-medium">{cat}</div>
                                    </div>
                                })}
                            </div>
                        </div>

                        {/* Anime & Manga Categories */}
                        <div className="flex gap-1.5 flex-col text-sm">
                            <div className="">Anime & Manga Categories</div>
                            <input type="text" className="w-full p-2 px-4 bg-gray-50 rounded focus:outline-none" placeholder="Search" />
                        </div>

                    </div>

                    <div className="w-full flex gap-5 flex-col">
                        {/* Thread Text */}
                        <div className="min-h-14 xl:min-h-24 xl:mt-5 xl:flex xl:flex-1 p-10 text-sm bg-gray-50 rounded">
                                {thread.thread}
                        </div>

                        {/* Edit Button */}
                        <Link to={"/movie"} onClick={updateThread} className="p-2 text-sm text-center text-white bg-red-400 rounded">Edit</Link>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default EditThread;