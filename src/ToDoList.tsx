import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("할 일 추가", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "할 일을 적어주세요.",
          })}
          placeholder="할 일 적기"
        />
        <button>추가하기</button>
      </form>
    </div>
  );
}

export default ToDoList;
