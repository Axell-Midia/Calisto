import { useState } from "react"
import { Todos } from "./assets/components/Todos"

const mockTodos = [
  {
    id: 1,
    text: "tarea 1",
    completed: false
  },
  {
    id: 2,
    text: "tarea 2",
    completed: false
  },
  {
    id: 3,
    text: "tarea 3",
    completed: false
  }
  {
    id: 4,
    text: "tarea 4",
    completed: false
  }
]


const App = () => {
  const [todos, setTodos] = useState(mockTodos)

  return (
    <Todos todos={todos} />
  )
}

export default App
