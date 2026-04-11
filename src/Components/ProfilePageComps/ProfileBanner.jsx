

function ProfileBanner(){

    return(
        <>
            <div className="h-[272px] px-6 flex gap-6 justify-start items-end shadow bg-cover bg-center" style={{ backgroundImage: `url(/newJeansBanner.jpg)`}}>
                <div className="w-36 aspect-square rounded-t bg-center bg-cover" style={{ backgroundImage: `url(${`/hanni.jpg`})`}}></div>
                <div className="py-5 text-gray-700 text-xl font-semibold tracking-wide">hanni</div>
            </div>
        </>
    )
}

export default ProfileBanner;