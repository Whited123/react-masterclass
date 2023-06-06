import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("글자 수가 10보다 커야합니다.");
//     }
//     console.log("제 출 당 당");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="할 일 적기" />
//         <button>추가하기</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("이메일")} placeholder="이메일" />
        <input {...register("성")} placeholder="성" />
        <input {...register("이름")} placeholder="이름" />
        <input {...register("아이디")} placeholder="아이디" />
        <input {...register("비밀번호")} placeholder="비밀번호" />
        <input {...register("비밀번호 확인")} placeholder="비밀번호 확인" />
        <button>추가하기</button>
      </form>
    </div>
  );
}

export default ToDoList;
