
import { useState } from "react";

const Likes = () => {
    const [likes, setLikes] = useState(0);
    console.log(likes);

    const sumar = () => {
        setLikes(likes + 1);
    }

    const restar = () => {
        setLikes(likes - 1);
    }

    return (
        <>
            <p>Likes: {likes}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </>
    )
}

export default Likes;