import { TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import { Button } from "@mui/material";
import { SignUpButtonContainer } from "../LoginPage/styledLogin";

const EditProfile = () => {
  const [form, onChange] = useForm({ name: "", email: "", cpf: "" });

  const handleSubmission = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <TextField
          name="name"
          value={form.name}
          onChange={onChange}
          variant="outlined"
          label="Nome"
          required
        />
        <TextField
          name="email"
          value={form.email}
          onChange={onChange}
          variant="outlined"
          label="E-mail"
          required
        />
        <TextField
          name="cpf"
          value={form.cpf}
          onChange={onChange}
          variant="outlined"
          label="CPF"
          placeholder="Somente números"
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          required
        />
        <SignUpButtonContainer>
          <Button 
          type={"submit"} 
          fullWidth
          variant={"contained"}
          color={"primary"}>
            SALVAR
          </Button>
        </SignUpButtonContainer>
      </form>
    </div>
  );
};

export default EditProfile;
