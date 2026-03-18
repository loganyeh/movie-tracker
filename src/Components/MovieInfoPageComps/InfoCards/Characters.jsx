import { useContext, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { MyContext } from "../../../Context/MyContext";

function Characters(){

    // console.log(actorData);

    const characterData = [
        { character: "Tanjirou Kamado", actor: "Natsuki Hinae", lead: "Main", language: "Japanese" },  
        { character: "Nezuko Kamado", actor: "Akari Kitou", lead: "Main", language: "Japanese" },  
        { character: "Tanjirou Kamado", actor: "Natsuki Hinae", lead: "Main", language: "Japanese" },  
        { character: "Tanjirou Kamado", actor: "Natsuki Hinae", lead: "Main", language: "Japanese" },  
    ]

    return(
        <>
            <div className="min-h-40 w-11/12 mb-6">
                <div className="h-10 flex whitespace-wrap justify-start items-center text-gray-600 text-lg font-semibold">Characters</div>
                <div className="h-auto w-full flex flex-wrap justify-start items-center">

                    {/* card */}
                    {characterData.map((character, index) => {
                        return <CharacterCard key={index} />
                    })}

                </div>
            </div>
        </>
    )
}

export default Characters;