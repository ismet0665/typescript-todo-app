//10- gelen props un type ını belirliyoruz. obje formatında olacagı için TodoType dedik.
interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

//11- TodoListItem componenti props alacagı için React.FC dememiz lazım ve props un type ını belirtmemiz lazım.
const TodoListItem: React.FC<IListItem> = ({
  item,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {/* 12- checked işlemini condition rendiring yaptık */}
      {item.isDone ? (
        <p className="checked" onClick={() => toggleTodo(item)}>
          {item.task}
        </p>
      ) : (
        <p onClick={() => toggleTodo(item)}>{item.task} </p>
      )}

      <span className="task-icons" onClick={() => deleteTodo(item.id)}>
        ❌
      </span>
    </li>
  );
};

export default TodoListItem;
