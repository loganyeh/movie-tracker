

function ProfileBanner(){

    return(
        <>
            <div className="border-b border-gray-400 h-52 md:h-[330px] px-5 md:px-8 flex justify-center items-end shadow bg-cover bg-center" style={{ backgroundImage: `url(/newJeansBanner.jpg)`}}>
                <div className="xl:px-5 w-full 2xl:max-w-[1400px] xl:max-w-7xl flex gap-4 md:gap-6 items-end">
                    <div className="w-28 md:w-36 aspect-square rounded-t-sm bg-center bg-cover" style={{ backgroundImage: `url(${`/hanni.jpg`})`}}></div>
                    <div className="py-3 text-gray-700 text-xl font-semibold tracking-wide">hanni</div>
                </div>
            </div>
        </>
    )
}

export default ProfileBanner;