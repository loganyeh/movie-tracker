

function SocialMedia(){
    const socialMediaData = [
        {logo: <i className='bx bx-link text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-blue-600", text: "Official Site", country: "JP"},
        {logo: <i className='bx bxl-facebook-square text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-blue-700", text: "Facebook", country: "JP"},
        {logo: <i className='bx bxl-twitter text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-blue-500", text: "Twitter", country: ""},
        {logo: <i className='bx bxl-twitter text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-blue-500", text: "Twitter", country: "JP"},
        {logo: <i className='bx bxl-twitter text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-blue-500", text: "Twitter", country: ""},
        {logo: <i className='bx bx-tennis-ball text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-orange-400", text: "Crunchyroll", country: "FR"},
        {logo: <i className='bx bx-tv text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-green-400", text: "Hulu", country: ""},
        {logo: <i className='bx bx-tv text-white 2xl:text-3xl xl:text-xl' ></i>, color: "bg-red-600", text: "Netflix", country: ""},

    ]

    return(
        <>
            <div className="h-auto w-2/3 mb-6">
                <div className="h-8 w-full mb-2 2xl:text-xl xl:text-lg font-normal text-gray-600">External & Streaming Links</div>
                {socialMediaData.map((socialMedia, index) => {
                    return <div key={index} className="h-auto w-full mb-3">
                                <div className="2xl:h-10 xl:h-8 w-full flex justify-start items-center bg-white rounded shadow-md">
                                    <div className={`2xl:h-8 2xl:w-8 xl:h-6 xl:w-6 m-1 flex justify-center items-center font-normal ${socialMedia.color} rounded`}>{socialMedia.logo}</div>
                                    <div className="h-full w-auto px-2 flex justify-center items-center font-medium text-gray-500 2xl:text-lg xl:text-base">{socialMedia.text}</div>
                                    <div className="h-full w-auto pl-1 flex justify-center items-center font-medium 2xl:text-sm xl:text-xs text-gray-400">{socialMedia.country}</div>
                                </div>
                            </div>
                })}

            </div>
        </>
    )
}

export default SocialMedia;