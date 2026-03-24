

function ProfileBanner(){

    return(
        <>
            <div className="h-64 w-full flex justify-center items-end shadow" style={{ backgroundImage: `url(/newJeansBanner.jpg)`, backgroundSize: "cover", backgroundPosition: "center",}}>
                <div className="min-h-1/2 w-10/12 flex justify-start items-end">
                    <div className="h-36 w-36 flex justify-center items-center">
                        <img className="rounded-t" src={`/hanni.jpg`} alt="" />
                    </div>
                    <div className="h-12 min-w-32 flex justify-center items-center text-gray-700 text-2xl font-semibold">Hanni</div>
                </div>
            </div>
        </>
    )
}

export default ProfileBanner;