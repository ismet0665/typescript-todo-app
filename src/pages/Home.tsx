import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6430a47ed4518cfb0e531e05.mockapi.io/typescript-todo";

//2- todolarımız Array içerisinde obje formatında ve her bir todo muz obje formatında. bu type ı global hale getirmek için type.d.ts sayfasına taşıdık.
// interface TodoType {
//   task: string;
//   isDone: boolean;
//   id: string | number;
// }

const Home = () => {
  //1- todo larımızı tutacagımız state tanımladık.api deki formatında interface tanımlayıp ona göre veri kabul et dedik.
  const [todos, setTodos] = useState<TodoType[]>([]);

  //3- verilerimizi apiden çekeceğiz.
  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      setTodos(data); //4- gelen datayı setTodos a gönderecegiz.
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //13- api ye todo ekleme func.
  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      axios.post(url, newTodo);
      getTodos(); // post işleminden sonra güncel todo ları getirmesi için.
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTodo: ToggleFn = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  //5- useEffect ile sayfa açıldıgında apiden verileri çeksin.
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

      {/* 6- apiden gelen verileri TodoList e gönderiyoruz. */}
    </div>
  );
};

export default Home;
