import { FieldErrors, useForm } from "react-hook-form";

// Less code (c)
// Better validation (c)
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)

interface LoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({ mode: "onSubmit" });
  const onValid = (data: LoginForm) => {
    console.log("im valid bby");
    setError("username", { message: "Taken username" });
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
    resetField("password");
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <br />
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input required type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
