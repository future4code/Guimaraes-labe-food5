import { TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import { Button } from "@mui/material";
import { SignUpButtonContainer } from "../LoginPage/styledLogin";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";

const EditProfile = () => {
  useProtectedPage()
  const [form, onChange] = useForm({ name: "", email: "", cpf: "" });

  const handleSubmission = (event) => {
    console.log("deu certo")
    event.preventDefault();
    axios
      .put(`${BASE_URL}/profile`, form, {
        headers: {
          auth: localStorage.getItem ("token")
        },
      })
      .then((res) => {
        console.log(res.data);
        
      })
      .catch((err) => {
        alert(err.response.data);
      });
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
