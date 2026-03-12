

function SocialMedia(){
    const socialMediaData = [
        {logo: <i className='bx bx-link text-white text-3xl' ></i>, color: "bg-blue-600", text: "Official Site", country: "JP"},
        {logo: <i className='bx bxl-facebook-square text-white text-3xl' ></i>, color: "bg-blue-700", text: "Facebook", country: "JP"},
        {logo: <i className='bx bxl-twitter text-white text-3xl' ></i>, color: "bg-blue-500", text: "Twitter", country: ""},
        {logo: <i className='bx bxl-twitter text-white text-3xl' ></i>, color: "bg-blue-500", text: "Twitter", country: "JP"},
        {logo: <i className='bx bxl-twitter text-white text-3xl' ></i>, color: "bg-blue-500", text: "Twitter", country: ""},
        {logo: <i className='bx bx-tennis-ball text-white text-3xl' ></i>, color: "bg-orange-400", text: "Crunchyroll", country: "FR"},
        {logo: <i className='bx bx-tv text-white text-3xl' ></i>, color: "bg-green-400", text: "Hulu", country: ""},
        {logo: <i className='bx bx-tv text-white text-3xl' ></i>, color: "bg-red-600", text: "Netflix", country: ""},

    ]

    return(
        <>
            <div className="h-auto w-2/3 mb-6">
                <div className="h-8 w-full mb-2 text-xl font-normal text-gray-600">External & Streaming Links</div>
                {socialMediaData.map((socialMedia, index) => {
                    return <div key={index} className="h-auto w-full mb-3">
                                <div className="h-10 w-full flex justify-start items-center bg-white rounded shadow-md">
                                    <div className={`h-8 w-8 m-1 flex justify-center items-center font-normal ${socialMedia.color} rounded`}>{socialMedia.logo}</div>
                                    <div className="h-full w-auto px-2 flex justify-center items-center font-medium text-gray-500 text-lg ">{socialMedia.text}</div>
                                    <div className="h-full w-auto pl-1 flex justify-center items-center font-medium text-sm text-gray-400">{socialMedia.country}</div>
                                </div>
                            </div>
                })}

            </div>
        </>
    )
}

export default SocialMedia;