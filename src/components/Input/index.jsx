import { ContainerInput, Container } from "./styles";

function Input({ type, placeholder, register, name, error }) {
  // console.log(error);
  return (
    <Container>
      <ContainerInput
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />
      {error && <p>{error} </p>}
    </Container>
  );
}

export default Input;
