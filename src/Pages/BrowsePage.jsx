import { Link } from "react-router-dom";

function BrowsePage(){

    return(
        <>
            <div>this is the browse page</div>
            <Link to={"/favorite"}><div>favorite page</div></Link>
        </>
    )
}

export default BrowsePage;