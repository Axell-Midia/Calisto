import { useState } from "react"

const Contador = () => {
    const [valor, setValor] = useState(0)

    const sumar = () => {
        setValor(valor + 1)
    }

    const restar = () => {
        setValor(valor - 1)
    }

    const reset = () => {
        setValor(0)
    }

    const potencia = () => {
        setValor(valor * valor)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">{valor}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={sumar}>Sumar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={restar}>Restar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={reset}>Reiniciar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={potencia}>Potencia</button>
            </div>
        </>
    )

}
export default Contador