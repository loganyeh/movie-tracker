import type { ThreadApi } from "./Thread.js";
import { Link } from "react-router-dom";
import EditThread from "./EditThread.js";

type ThreadCardProp = {
    thread: ThreadApi;
    deleteThread: (id: number) => void;
}

function ThreadCard({ thread, deleteThread }: ThreadCardProp ){

    if(!thread) return null;

    return(
        <>
            <div className="border px-3 py-4 bg-white rounded shadow-md">

                <div className="flex justify-between">
                    <div className="border flex gap-3 flex-col">
                        <div className="text-sm text-gray-600">{thread.thread || "What if you had the ability to make your own Demon Slayer breathing style/form... what would it be?"}</div>
                        <div className="flex gap-2.5 items-center">
                            <div className="h-6 w-6 bg-blue-300 rounded"></div>
                            <div className="text-xs">{thread.name || "Rukia"} replied {"3 months"} ago</div>
                        </div>
                        <div className="w-fit px-2 py-0.5 bg-blue-400 text-white text-xs font-light rounded-full">{"general"}</div>
                    </div>
                    
                    <div className="border flex gap-2 flex-col items-start shrink-0">
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
                    <div className="border text-right">Comments</div>
                    <div className="border flex justify-end items-center gap-2 p-2 text-sm text-gray-600">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident aut unde esse minus atque et illo nemo temporibus? Totam, quod debitis! Molestiae est consectetur earum recusandae excepturi eius ea.</div>
                        <div className="shrink-0 w-6 h-6 bg-blue-300 rounded"></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ThreadCard;