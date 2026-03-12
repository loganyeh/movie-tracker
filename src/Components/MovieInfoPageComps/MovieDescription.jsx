

function MovieDescription(){

    return(
        <>
            <div className="border border-red-600 h-10/12 w-full">
                {/* Title */}
                <div className="h-1/3 w-full flex justify-start items-center text-xl font-normal">Demon Slayer: Kimetsu no Yaiba</div>
                {/* Description Blurb */}
                <div className="h-2/3 w-5/6 flex justify-start items-start text-md font-light">
                    It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. 
                    To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, 
                    Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.
                </div>
            </div>
        </>
    )
}

export default MovieDescription;