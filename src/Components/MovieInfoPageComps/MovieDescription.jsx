

function MovieDescription({ data }){

    return(
        <>
            <div className="">
                {/* Title */}
                <div className="p-4 text-gray-500 font-semibold">{data?.title || "Demon Slayer"}</div>
                {/* Description Blurb */}
                <div className="hidden p-4 md:flex text-sm font-light ">{data?.overview || "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family."}
                    <br />
                    <br />(Source: {data?.production_companies[0].name || "Crunchyroll"})
                </div>
            </div>
        </>
    )
}

export default MovieDescription;