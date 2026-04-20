import { useState } from "react";

type FormularioProps = {
    label: string;
};

const Formulario = ({ label }: FormularioProps) => {
    const [nombre, setNombre] = useState("");

    // Función para manejar el cambio en el input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    };

    // Función para manejar el click en el botón
    const handleClick = () => {
        alert(`Hola, ${nombre}!`);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">{label}</h2>
            <input
                type="text"
                value={nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                className="bg-gray-200 text-black p-2 rounded mb-2"
            />
            <button
                onClick={handleClick}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Mostrar saludo
            </button>
        </div>
    );
};

export default Formulario;