import { Link } from "react-router-dom";

function FavoritePage(){

    return(
        <>
            <div>this is the favorite page</div>
            <Link to={"/"}><div>browse page</div></Link>
        </>
    )
}

export default FavoritePage;