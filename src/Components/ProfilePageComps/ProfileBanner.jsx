

function ProfileBanner(){

    return(
        <>
            <div className="2xl:h-64 xl:h-52 w-full flex justify-center items-end shadow" style={{ backgroundImage: `url(/newJeansBanner.jpg)`, backgroundSize: "cover", backgroundPosition: "center",}}>
                <div className="min-h-1/2 w-10/12 flex justify-start items-end">
                    <div className="2xl:h-36 2xl:w-36 xl:h-28 flex justify-center items-end">
                        <img className="2xl:h-36 xl:h-28 rounded-t" src={`/hanni.jpg`} alt="" />
                    </div>
                    <div className="2xl:h-12 2xl:w-32 xl:h-10 xl:w-24 flex justify-center items-center text-gray-700 2xl:text-2xl xl:text-xl font-semibold">Hanni</div>
                </div>
            </div>
        </>
    )
}

export default ProfileBanner;