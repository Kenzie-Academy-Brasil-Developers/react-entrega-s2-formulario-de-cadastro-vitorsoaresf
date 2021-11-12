import { ContainerForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import Input from "../Input";
import Button from "../Button";

function Form() {
  const history = useHistory();

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

  const onSubmitFunction = (data) => {
    console.log(data);
    history.push(`/login/${data.name}`);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
      <Input
        type="text"
        placeholder=" Nome"
        register={register}
        // {...register("name")}
        name="name"
        error={errors.name?.message}
      />
      {/* {errors.name?.message} */}
      <Input
        type="email"
        placeholder=" Email"
        register={register}
        name="email"
        // {...register("email")}
        error={errors.email?.message}
      />
      {/* {errors.email?.message} */}
      <Input
        type="password"
        placeholder=" Senha"
        register={register}
        name="password"
        // {...register("password")}
        error={errors.password?.message}
      />
      {/* {errors.password?.message} */}
      <Input
        type="password"
        placeholder=" Confirmar Senha"
        register={register}
        name="confirm_password"
        // {...register("confirm_password")}
        error={errors.confirm_password?.message}
      />
      {/* {errors.confirm_password?.message} */}
      <Button type="submit" value="CADASTRAR" />
    </ContainerForm>
  );
}

export default Form;
