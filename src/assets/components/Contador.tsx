type ContadorProps = {
    sumar: () => void
    restar: () => void
    reset: () => void
    valor: number
}

function Contador({ sumar, restar, valor, reset }: ContadorProps) {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">{valor}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sumar}>Sumar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={restar}>Restar</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>Reiniciar</button>
            </div>
        </>
    )
}
export default Contador