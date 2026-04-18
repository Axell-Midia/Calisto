type Todo = {
<<<<<<< HEAD
    id: number;
    text: string;
    completed: boolean;
}
=======
  id?: number;
  text?: string;
  completed?: boolean;
};
>>>>>>> ganimedes

type Props = {
  todos: Todo[];
};

export function Todos({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
