import { FormProvider, useForm } from "react-hook-form";
import { Users } from "./Users";
import { DevTool } from "@hookform/devtools";
import { defaultValues, schema, Schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function UsersProvider() {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Users />
      <DevTool control={methods.control} />
    </FormProvider>
  );
}
