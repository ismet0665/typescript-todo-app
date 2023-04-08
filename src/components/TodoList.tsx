import TodoListItem from "./TodoListItem";

//7- TodoList componentinin alacagı props ların type ını belirlememiz lazım. globale alabiliriz. globale taşıdık.type.d.ts dosyasına
// interface ITodoList {
//   todos: TodoType[];
// }

//8- TodoList componenti React.FC=func. component ve props olarak <ITodoList> i alan bir componentdir.
//React.FC<IToDoList> yani diyoruz ki bu bir reactFunctional componenttir props olarak da TodoList interfaceine uygun olarak props gönderebilir hale getirdik.Props alan componentlerde React.FC yi belirtmemiz zorunlu
// componentler arası props gönderirken type ını belirtmemiz lazım.

// 9- gelen todoyu map ile ekrana basacagız.

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
