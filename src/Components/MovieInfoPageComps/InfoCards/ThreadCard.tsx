import { useState } from "react";
import type { ThreadApi } from "./Thread.js";
import { Link } from "react-router-dom";

type ThreadCardProp = {
    thread: ThreadApi;
    deleteThread: (id: number) => void;
    refreshThreads: () => void;
    deleteComment?: (id: number) => void
}

function ThreadCard({ thread, deleteThread, refreshThreads }: ThreadCardProp ){
    const [isComment, setIsComment] = useState(false);
    const [isEditComment, setIsEditComment] = useState(false);
    const [changeComment, setChangeComment] = useState("");
    const [commentText, setCommentText] = useState("");

    if(!thread) return null;

    async function addComment(){
        await fetch(`http://localhost:3000/threads/${thread.id}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: thread.id,
                comment: commentText,
            })
        });

        refreshThreads();
    };

    async function deleteComment(id: number, commentID: number){
        await fetch(`http://localhost:3000/threads/${id}/comments/${commentID}`, {
            method: "DELETE"
        });

        refreshThreads();
    };

    return(
        <>
            <div className="px-3 py-4 bg-white rounded shadow-md">

                <div className="flex justify-between">
                    <div className="flex gap-3 flex-col">
                        <div className="text-sm text-gray-600">{thread.thread || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}</div>
                        <div className="flex gap-2.5 items-center">
                            <div className="h-6 w-6 bg-blue-300 rounded"></div>
                            <div className="text-xs">{thread.name || "Rukia"} replied {"3 months"} ago</div>
                        </div>
                        <div className="w-fit px-2 py-0.5 bg-blue-400 text-white text-xs font-light rounded-full">{"general"}</div>
                    </div>
                    
                    <div className="flex gap-2 flex-col items-start shrink-0">
                            <div className="flex gap-2">
                                <div className="flex gap-1 items-center text-xs">
                                    <i className='bx bxs-bar-chart-alt-2 text-gray-500' ></i>
                                    <div className="text-gray-400">{"120"}</div>
                                </div>
                                <div className="flex gap-1 items-center text-xs">
                                    <i className='bx bx-chat text-gray-500' ></i>
                                    <div className="text-gray-400">{"3"}</div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 w-full">   
                                <Link to={`/editthread/${thread.id}`} className="w-full flex justify-end">
                                    <i className='bx bx-edit-alt text-gray-500 hover:text-red-500' ></i>
                                </Link>

                                <i onClick={() => deleteThread(thread.id)} className='bx bx-trash text-gray-500 hover:text-red-500 cursor-pointer'></i>
                            </div>
                    </div>

                </div>

                {/* Comments */}
                <div className="">
                    <div className="flex justify-end items-center gap-2">
                        <div className="text-sm">Comments</div>
                        <i onClick={() => setIsComment(prev => !prev)} className='bx bx-plus cursor-pointer hover:text-blue-500' ></i>
                    </div>

                    {isComment && (
                        <div className={`border flex justify-end items-start gap-2 p-3 text-sm text-gray-600`}>
                            <input className="border w-full p-4" onChange={(e) => {setCommentText(e.target.value)}} type="text" placeholder="Type your comment here..."/>
                            <div className="flex flex-col items-center gap-2">
                                <div className="shrink-0 w-6 h-6 bg-blue-300 rounded"></div>
                                <i onClick={() => { 
                                    setIsComment(false);
                                    addComment();
                                    setCommentText("");
                                }} className='bx bx-plus cursor-pointer hover:text-blue-500 focus:outline-none' ></i>
                            </div>
                        </div>
                    )}
                    
                    {thread.comments.map((comment, index) => {
                        return <div key={index} className="flex justify-end items-start gap-2 p-3 text-sm text-gray-600">
                                    <div className="p-5 w-full">{comment.comment}</div> 
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="shrink-0 w-6 h-6 bg-blue-300 rounded"></div>
                                        <i className='bx bx-edit-alt cursor-pointer hover:text-red-500' ></i>
                                        <i onClick={() => deleteComment(thread.id, comment.id)} className='bx bx-trash cursor-pointer hover:text-red-500' ></i>
                                    </div>
                                </div>
                    })}

                </div>

            </div>
        </>
    )
}

export default ThreadCard;