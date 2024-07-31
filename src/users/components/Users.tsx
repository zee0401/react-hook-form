import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { Schema } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";

export const Users = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
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
      <RHFAutocomplete
        name="states"
        options={[
          { id: "1", label: "California" },
          { id: "2", label: "Sanfransisco" },
        ]}
        label="States"
      />
    </Stack>
  );
};
