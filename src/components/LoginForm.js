import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userIsLoging } from "../reducers/loginReducer";
import { selectLoading } from "../reducers/userSlice";
import Loading from "./Loading";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

    const loginFormSubmit = (data) => {
      if(!data) { return }
    const { username, password } = data;
    dispatch(userIsLoging({ username, password }));
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      loginFormSubmit();
    }
  };
  return (
      <div>
      <form onSubmit={handleSubmit(loginFormSubmit)}>
        <div>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Tên tài khoản..."
            className="form-control"
            onKeyDown={handleEnterKey}
            {...register("username", {
              required: "Vui lòng nhập tên tài khoản",
            })}
          ></input>

          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Mật khẩu..."
            className="form-control"
            onKeyDown={handleEnterKey}
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
              minLength: {
                value: 6,
                message: "Mật khẩu tối thiểu 6 kí tự",
              },
            })}
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button disabled={isLoading}>Đăng nhập</button>
      </form>
      {isLoading && <Loading />}
    </div>
  );
}

export default LoginForm;
