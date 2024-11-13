import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Dormir", checked: false },
    { id: 2, text: "Manger", checked: true },
  ]);
  // const [todo, setTodo] = useState();

  const onSubmit = async (formData) => {
    const todo = formData.get("todo");

    // todos.unshift(todo);
    // setTodos([todo, ...todos]);
    setTodos([{ id: Date.now(), text: todo }, ...todos]);
  };

  // const deleteTodo = (text) => {
  //   // const index = todos.indexOf(text);
  //   // todos.splice(index, 1);
  //   setTodos(todos.filter((todo) => todo !== text));
  // };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoChecked = (id, newTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...newTodo };
        }
        return todo;
      })
    );
  };

  // const liTodos = todos.map((todo) => (
  //   <li key={todo}>
  //     <input
  //       defaultValue={todo}
  //       name="todo"
  //       className="border rounded-md px-4 py-3 flex-1"
  //     />
  //   </li>
  // ));
  // console.log(liTodos);

  return (
    <div className="p-4 flex flex-col gap-4">
      {/* <h1 className="font-bold text-2xl">{todo}</h1> */}
      <form action={onSubmit} className="flex items-center gap-2">
        <input name="todo" className="border rounded-md px-4 py-3 flex-1" />
        {/* Controlled input (good if we want to display the result somewhere) */}
        {/* <input
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          className="border rounded-md px-4 py-3 flex-1"
        /> */}
        <button
          type="submit"
          className="border rounded-md px-4 py-3 bg-zinc-800 text-white"
        >
          Add
        </button>
      </form>
      <ul className="list-disc list-inside">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-2 gap-4 border w-60 rounded-md bg-zinc-100 hover:bg-zinc-400 flex justify-between px-4 py-3 flex-1"
          >
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => {
                updateTodoChecked(todo.id, { checked: !todo.checked });
              }}
            />
            <span className="flex-1">{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="border border-zinc-800 bg-white rounded-md p-2 text-xs"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

