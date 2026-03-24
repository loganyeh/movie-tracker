

function YearSliderBar(){

    return(
        <>
            <div className="h-auto w-full mt-6">
                    <div className="h-10 w-full pl-2 flex justify-start items-center text-gray-500 font-light">Year</div>
                    <div className="h-2 w-11/12 pl-3 flex justify-center items-center">
                        <div className="border-2 border-blue-400 h-4 w-4 bg-white rounded-full"></div>
                        <div className="h-2 w-full bg-white rounded-r"></div>
                    </div>
            </div>
        
        </>
    )
}

export default YearSliderBar;