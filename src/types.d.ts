// dosya adını .d.ts dersek(type.d.ts) typescript bunu global olarak tip (type) tanımlaması yaptıgımızı algılıyor. ve export ve import yapmaktan bizi kurtarıyor.

interface TodoType {
  task: string;
  isDone: boolean;
  id: string | number;
}

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

type AddFn = (text: string) => void; //func. geriye bir deger döndürmediği için void.
type ToggleFn = (item: TodoType) => void;
type DeleteFn = (id: string | number) => void;
