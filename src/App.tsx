import MyButton from "./assets/components/Button"
import Contador from "./assets/components/Contador"
import Formulario from "./assets/components/Formulario"
import Login from "./assets/components/Login"
import Password from "./assets/components/Password"
import Likes from "./assets/components/Likes"
const App = () => {

  return (
    <>
      <div className="bg-black text-white min-h-screen">

        <MyButton variant="primary" cambio={() => alert("login")} >
          Acceder
        </MyButton>
        <MyButton variant="secondary">
          Registrarse
        </MyButton>
        <MyButton variant="danger" cambio={() => alert("delete")}>
          Eliminar
        </MyButton>
        <Contador />
        <Formulario label="Saludar" />
        <Login />
        <Password />
        <Likes />
      </div>
    </>
  )
}

export default App;
