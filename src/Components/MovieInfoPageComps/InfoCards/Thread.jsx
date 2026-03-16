import ThreadCard from "./ThreadCard";

function Thread(){

    return(
        <>
            <div className="h-full w-1/2 flex flex-col justify-center items-start">

                {/* threads */}
                <div className="h-10 w-11/12 flex justify-between items-center text-gray-600 text-lg font-semibold rounded">
                    <div>Threads</div>
                    <div className="text-xs font-light">Create New Thread</div>
                </div>


                {/*  */}
                <div className="h-auto w-11/12">
                    <ThreadCard />
                </div>

                    
                </div>
        </>
    )
}

export default Thread;