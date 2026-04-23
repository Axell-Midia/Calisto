import MyButton from "./assets/components/Button"
import Contador from "./assets/components/Contador"
import Formulario from "./assets/components/Formulario"
import Login from "./assets/components/Login"
const App = () => {

  return (
    <>
      <div className="bg-black text-white min-h-screen">

        <MyButton variant="primary" c={() => alert("login")} >
          Acceder
        </MyButton>
        <MyButton variant="secondary">
          Registrarse
        </MyButton>
        <MyButton variant="danger" c={() => alert("delete")}>
          Eliminar
        </MyButton>
        <Contador />
        <Formulario label="Saludar" />
        <Login />
      </div>
    </>
  )
}

export default App;
