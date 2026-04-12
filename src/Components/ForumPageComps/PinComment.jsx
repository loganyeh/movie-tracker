
// type PinCommentProp = {
//     numOfPins: Number;
// }

function PinComment({ numOfPins }){
// function PinComment({ numOfPins }: PinCommentProp){

    return(
        <>
            <div className="flex gap-6 flex-col xl:grid xl:grid-cols-2">
                {Array.from({length: numOfPins || 8}).map((_, index) => {
                    return <div key={index} className="p-3 flex justify-between bg-white rounded shadow">

                        {/* tweet */}
                        <div className="flex gap-2 items-center">
                            <i className='bx bxs-pin text-blue-400 text-2xl' ></i>
                            <div className="flex flex-wrap text-sm text-gray-500 font-medium">New User Intro Thread - Welcome!</div>
                        </div>

                        {/* views and comments */}
                        <div className="flex gap-2 shrink-0 md:items-center">

                            <div className="flex gap-1 items-start">
                                <i className='bx bx-bar-chart-alt-2 text-gray-600 text-sm' ></i>
                                <div className="text-xs text-gray-500 font-medium">1010239</div>
                            </div>

                            <div className="flex gap-1 items-start">
                                <i className='bx bx-chat text-gray6500 text-sm' ></i>
                                <div className="text-xs text-gray-500 font-medium">21354</div>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        </>
    )
}

export default PinComment;