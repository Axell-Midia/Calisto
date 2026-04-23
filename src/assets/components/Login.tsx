import { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        /* const name = e.target.name;
        const value = e.target.value; */
        const { name, value } = e.target;

        //[] usamos lo que contiene la variable name para acceder a la propiedad del objeto
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = () => {
        console.log(form);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <input type="text" name="email" value={form.email} onChange={handleChange} className="bg-gray-200 text-black p-2 rounded mb-2" />
            <input type="password" name="password" value={form.password} onChange={handleChange} className="bg-gray-200 text-black p-2 rounded mb-2" />
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
        </div>
    )
}

export default Login;

