

function SocialMedia(){
    const socialMediaData = [
        {logo: <i className='bx bx-link text-xl' ></i>, color: "bg-blue-600", text: "Official Site", country: "JP"},
        {logo: <i className='bx bxl-facebook-square text-xl' ></i>, color: "bg-blue-700", text: "Facebook", country: "JP"},
        {logo: <i className='bx bxl-twitter text-xl' ></i>, color: "bg-blue-500", text: "Twitter", country: ""},
        {logo: <i className='bx bxl-twitter text-xl' ></i>, color: "bg-blue-500", text: "Twitter", country: "JP"},
        {logo: <i className='bx bxl-twitter text-xl' ></i>, color: "bg-blue-500", text: "Twitter", country: ""},
        {logo: <i className='bx bx-tennis-ball text-xl' ></i>, color: "bg-orange-400", text: "Crunchyroll", country: "FR"},
        {logo: <i className='bx bx-tv text-xl' ></i>, color: "bg-green-400", text: "Hulu", country: ""},
        {logo: <i className='bx bx-tv text-xl' ></i>, color: "bg-red-600", text: "Netflix", country: ""},

    ];

    return(
        <>
            <div className="flex gap-2 flex-col">
                <div className="text-gray-600 font-semibold">External & Streaming Links</div>

                <div className="grid gap-x-6 gap-y-3 grid-cols-2">
                    {socialMediaData.map((socialMedia, index) => {
                        return <div key={index} className="p-0.5 flex gap-1 items-center bg-white rounded shadow-md">
                                        <div className={`${socialMedia.color} p-1 flex items-center justify-center text-white rounded`}>{socialMedia.logo}</div>
                                        <div className="font-medium text-xs text-gray-500">{socialMedia.text}</div>
                                        <div className="text-gray-400 text-xs">{socialMedia.country}</div>
                                </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default SocialMedia;