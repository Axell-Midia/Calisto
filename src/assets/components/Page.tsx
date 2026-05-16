import { useState } from "react";
const init = {
    name: "",
    password: ""
}
const Page = () => {

    const [values, setValues] = useState(init);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues((prev) => ({ ...prev, [name]: value, }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        setValues(init)
    }
    return (
        <div>
            <div className="sm:col-span-2">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white"
                    />
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Page