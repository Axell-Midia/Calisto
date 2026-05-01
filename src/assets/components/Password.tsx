

import { useState } from "react";


const Password = () => {
    const [ocultar, setOcultar] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setOcultar(!ocultar);
    }

    return (
        <>
            <input
                type={ocultar ? "password" : "text"}
                name="password"
                onChange={handleChange}
                className="bg-gray-200 text-black p-2 rounded mb-2"
            />
            <button onClick={() => { setOcultar(!ocultar) }}>
                {ocultar ? "Mostrar" : "Ocultar"}
            </button>
        </>
    )
}

export default Password;
