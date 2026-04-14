import CharacterCard from "./CharacterCard.js";

import type { CreditsType } from "../../../API/MovieOverviewAPI.js";

type CharactersProp = {
    data: CreditsType[];
}

function Characters({ data }: CharactersProp ){

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
                    {data.slice(0, 6)?.map((data, index) => {
                        return <CharacterCard key={index} profile_path={data.profile_path} character={data.character} name={data.name} />
                    })}
                </div>

                {/* </div> */}
            </div>
        </>
    )
}

export default Characters;