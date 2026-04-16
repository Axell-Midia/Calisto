
type Todo = {
    id: number;
    text: string;
    completed: boolean;
}

type Props = {
    todos: Todo[];
};

export function Todos({ todos }: Props) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                </li>
            ))}
        </ul>
    );
}