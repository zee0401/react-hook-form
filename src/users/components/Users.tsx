import { useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { schema, Schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Users = () => {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });
  return (
    <Stack sx={{ gap: 3 }}>
      <TextField
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
        placeholder="name"
      />
      <TextField
        {...register("email")}
        placeholder="email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
    </Stack>
  );
};
