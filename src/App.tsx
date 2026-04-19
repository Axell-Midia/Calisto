import MyButton from "./assets/components/Button"
import Contador from "./assets/components/Contador"
import { useState } from "react"

const App = () => {
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

  return (
    <>
      <MyButton variant="primary" c={() => alert("login")} >
        Acceder
      </MyButton>
      <MyButton variant="secondary">
        Registrarse
      </MyButton>
      <MyButton variant="danger" c={() => alert("delete")}>
        Eliminar
      </MyButton>
      <Contador sumar={sumar} restar={restar} reset={reset} valor={valor} />
    </>
  )
}

export default App;
