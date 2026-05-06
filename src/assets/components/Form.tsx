import { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    })


    // los formularios recargan la pagina por defecto, para evitarlo se usa preventDefaul()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("El formulario se ha enviado exitosamente");
        console.log(user);
    }


    const handleUsername = (e) => {
        setUser({ ...user, username: e.target.value })
    }

    const handlePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text"
                id="username"
                onChange={handleUsername}
                value={user.username}
            />
            <label htmlFor="password">Contraseña:</label>
            <input
                type="password"
                id="password"
                onChange={handlePassword}
                value={user.password}
            />
            <button type="submit">Enviar</button>
        </form>
    </>
}

export default Form;