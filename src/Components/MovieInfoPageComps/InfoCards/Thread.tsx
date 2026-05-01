import ThreadCard from "./ThreadCard.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export type ThreadApi = {
    id: number;
    thread: string;
    name: string;
}

export type CommentsApi = {
    comment: string;
}

function Thread(){
    const [threads, setThreads] = useState<ThreadApi[]>([]);
    const [comments, setComments] = useState<CommentsApi[]>([]);

    useEffect(() => {
        async function getThreads(){
            const response = await fetch("http://localhost:3000/threads");
            const data: ThreadApi[] = await response.json();
            setThreads(data);
        };

        getThreads();


        async function getComments(){
            const response = await fetch(`http://localhost:3000/threads/${id}/comments`);
            const data: CommentsApi[] = await response.json();
            setComments(data);
        };

        getComments();

    }, []);

    async function deleteThread(id: number){
        await fetch(`http://localhost:3000/threads/${id}`, {
        method: "DELETE"
    });

        setThreads(prev => 
            prev.filter(thread => thread.id !== id)
        );
    }

    return(
        <>
            <div className="flex gap-2 flex-col">

                {/* threads */}
                <div className="flex justify-between items-center text-gray-600 font-semibold">
                    <div className="font-semibold">Threads</div>
                    <Link to={`/createnewthread`} className="text-xs font-light hover:text-blue-500">Create New Thread</Link>
                </div>

                {/*  */}
                <div className="flex gap-4 flex-col">
                    {threads.map((thread, index) => {
                        return <ThreadCard key={index} thread={thread} comments={comments} deleteThread={deleteThread} />
                    })}
                </div>

                </div>
        </>
    )
}

export default Thread;