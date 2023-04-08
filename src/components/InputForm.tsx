import { useState } from "react";
// InputForm componenttine addTodo func. props olarak home dan geldi.
interface IInputForm {
  addTodo: AddFn;
}

const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  const [task, setTask] = useState(""); //inputtan girilen degerleri almak için state tanımladık.useState("") başlangıç degerini verdiğimiz için typescript task i string olarak tanımladı.

  // handleClick func. addTodo func. na input a girilen degeri yolluyor.sonra input u sıfırlıyoruz setTask("").
  const handleClick = () => {
    addTodo(task);
    setTask("");
  };

  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="btn-hover btn-color"
        type="submit"
        onClick={handleClick}
        disabled={!task.trim()}
      >
        Add New Todo
      </button>
    </div>
  );
};

export default InputForm;
