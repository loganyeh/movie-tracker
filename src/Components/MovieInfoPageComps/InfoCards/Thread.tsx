import ThreadCard from "./ThreadCard.js";

function Thread(){

    return(
        <>
            <div className="flex gap-2 flex-col">

                {/* threads */}
                <div className="flex justify-between items-center text-gray-600 font-semibold">
                    <div className="font-semibold">Threads</div>
                    <div className="text-xs font-light">Create New Thread</div>
                </div>


                {/*  */}
                <div className="flex gap-4 flex-col">
                    {Array.from({length: 2}).map((_, index) => {
                        return <ThreadCard key={index} />
                    })}
                </div>

                    
                </div>
        </>
    )
}

export default Thread;