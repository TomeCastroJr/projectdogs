import { PhotoGet } from "./endpoints/PhotoGet";
import { PhotoPost } from "./endpoints/PhotoPost";
import { TokenPost } from "./endpoints/TokenPost";
import { UserPost } from "./endpoints/UserPost";


export function Api(){
    return(
        <>
            <h2>userPost</h2>
            <UserPost/>
            <h2>TokenPost</h2>
            <TokenPost/>
            <h2>photoPost</h2>
            <PhotoPost/>
            <h2>PhotoGet</h2>
            <PhotoGet/>
        </>
    )
}