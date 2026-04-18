type Todo = {
  id?: number;
  text?: string;
  completed?: boolean;
};

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
