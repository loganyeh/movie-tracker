
type AllTimeStatProp = {
    boxicon: string;
    ranking: string;
    text: string;
}

function AllTimeStat({ boxicon, ranking, text }: AllTimeStatProp ){

    return(
        <>
            <div className="hidden py-2 md:flex gap-2 justify-center text-xs font-medium bg-white shadow rounded">
                {/* <div className="">{boxicon}</div> */}
                <i className={`${boxicon}`} ></i>
                <div className="text-gray-500">#{ranking} {text} All Time</div>
            </div>
        </>
    )
}

export default AllTimeStat;