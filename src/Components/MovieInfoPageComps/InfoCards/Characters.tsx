import CharacterCard from "./CharacterCard.jsx";

function Characters({ data } ){

    const characterData = [
        { character: "Tanjirou Kamado", actor: "Natsuki Hinae", lead: "Main", language: "Japanese" },  
        { character: "Nezuko Kamado", actor: "Akari Kitou", lead: "Main", language: "Japanese" },  
        { character: "Tanjirou Kamado", actor: "Natsuki Hinae", lead: "Main", language: "Japanese" },  
        { character: "Tanjirou Kamado", actor: "Natsuki Hinae", lead: "Main", language: "Japanese" },  
    ]

    return(
        <>
            <div className="flex gap-3 flex-col">
                <div className="text-gray-600 font-semibold">Characters</div>
                {/* <div className="flex flex-wrap 2xl:justify-start xl:justify-around items-center"> */}

                <div className="flex gap-4 flex-col xl:grid xl:grid-cols-2 xl:gap-x-8">

                    {/* card */}
                    {data?.cast?.slice(0, 6)?.map((character, index) => {
                        return <CharacterCard key={index} data={character} />
                    })}
                </div>

                {/* </div> */}
            </div>
        </>
    )
}

export default Characters;