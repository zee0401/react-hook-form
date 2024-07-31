import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { Schema } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { useStates } from "../services/quries";
import { useEffect } from "react";

export const Users = () => {
  const statesQuery = useStates();
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Schema>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

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
        options={statesQuery.data}
        label="States"
      />
    </Stack>
  );
};
