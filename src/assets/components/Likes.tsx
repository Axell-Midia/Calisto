
import { useState } from "react";

const Likes = () => {
    const [likes, setlikes] = useState(0);

    return (
        <>
            <button onClick={() => { setlikes(likes + 1) }}>  </button>
        </>
    )
}

export default Likes;