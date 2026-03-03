import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovie } from "../API/api";

function BrowsePage(){

    async function getMovie(){
        await fetchMovie();

    }

    getMovie();

    return(
        <>
            <div>this is the browse page</div>
            <Link to={"/favorite"}><div>favorite page</div></Link>

        </>
    )
}

export default BrowsePage;