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

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={values.name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={values.lastName}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Correo"
                value={values.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={values.password}
                onChange={handleChange}
            />

            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;