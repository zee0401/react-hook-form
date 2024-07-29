import { useForm } from "react-hook-form";

export const Users = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: string }>({ mode: "all" });

  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="email"
        {...register("email", {
          required: { value: true, message: "Email is required" },
          maxLength: { value: 10, message: "Email is too long" },
        })}
      />
      <p>{errors.email?.message}</p>
    </form>
  );
};
