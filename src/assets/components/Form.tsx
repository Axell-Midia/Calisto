import { useState } from "react";

const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
};

const Form = () => {
    const [values, setValues] = useState(initialValues);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues((prev) => ({ ...prev, [name]: value, }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);

        // limpiar formulario
        setValues(initialValues);
    };

    const inputStyles =
        "p-3 rounded bg-zinc-800 outline-none focus:ring-2 focus:ring-blue-500";

    const buttonStyles =
        "p-3 rounded bg-blue-500 hover:bg-blue-600 cursor-pointer";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-zinc-900 p-8 rounded-xl w-96">
            <input
                type="email"
                name="email"
                placeholder="Correo"
                value={values.email}
                onChange={handleChange}
                className={inputStyles}
            />

            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={values.password}
                onChange={handleChange}
                className={inputStyles}
            />

            <button type="submit" className={buttonStyles}>Enviar</button>
        </form >
    );
};

export default Form;