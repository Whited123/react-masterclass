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

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  email: string;
  firstName: string;
  lastName: string;
  아이디: string;
  password: string;
  CheckingPassword: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    if (data.password !== data.CheckingPassword) {
      setError(
        "password",
        { message: "패스워드가 같지 않습니다." },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "서버가 오프라인입니다." });
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일 ? 반드시 적어야지",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "유 캔 온리 유즈 네이버 이메일",
            },
          })}
          placeholder="이메일"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "적으라 쉐이야",
            validate: {
              noKDY: (value) =>
                value.includes("김동영")
                  ? "하늘 아래 두개의 태양은 없다"
                  : true,
            },
          })}
          placeholder="성"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "적으라 쉐이야" })}
          placeholder="이름"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("아이디", {
            required: "반드시 적어야지",
            minLength: {
              value: 5,
              message: "반드시 길어야지",
            },
          })}
          placeholder="아이디"
        />
        <span>{errors?.아이디?.message}</span>
        <input
          {...register("password", { required: "적으라 쉐이야" })}
          placeholder="비밀번호"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("CheckingPassword", { required: "적으라 쉐이야" })}
          placeholder="비밀번호 확인"
        />
        <span>{errors?.CheckingPassword?.message}</span>
        <button>추가하기</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
