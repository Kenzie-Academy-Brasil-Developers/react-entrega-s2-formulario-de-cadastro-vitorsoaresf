import { ContainerForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";

function Form() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    name: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatório"),
    confirm_password: yup.string().required("Confirmação de senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerForm>
      <Input placeholder=" Nome" {...register("name")} />
      {errors.name?.message}
      <Input placeholder=" Email" {...register("email")} />
      {errors.email?.message}
      <Input placeholder=" Senha" {...register("password")} />
      {errors.password?.message}
      <Input placeholder=" Confirmar Senha" {...register("confirm_password")} />
      {errors.confirm_password?.message}
      <Button type="submit" />
    </ContainerForm>
  );
}

export default Form;
