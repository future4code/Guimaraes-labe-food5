import React from "react";
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@mui/material";
import { SignUpButtonContainer } from "../LoginPage/styledLogin";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const Adress = () =>{
    const [form, onChange, clear] = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: ""});

    const handleSubmission = (event) => {  
        event.preventDefault()  
        axios
      .put(`${BASE_URL}/address`, form, {
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
    }
    return(
        <div>
            <p>Meu Endereço</p>
            <form onSubmit={handleSubmission}>
            <TextField
            value={form.street}
            name="street"
            onChange={onChange}
            label="Logadouro"
            variant="outlined"
            className="Input_locus"
            required
        />
        <TextField
            value={form.number}
            name="number"
            onChange={onChange}
            label="Número"
            variant="outlined"
            className="Input_locus"
            pattern="[.\s\w]{2,}"
            required
        />
        
        <TextField
            value={form.complement}
            name="complement"
            onChange={onChange}
            label="Complemento"
            variant="outlined"
            className="Input_locus "
            required
        />
        
        <TextField
            value={form.neighbourhood}
            name="neighbourhood"
            onChange={onChange}
            label="Bairro"
            variant="outlined"
            className="Input_locus"
            required
        />
        <TextField
            value={form.city}
            name="city"
            onChange={onChange}
            label="Cidade"
            variant="outlined"
            className="Input_locus"
            required
        />
        <TextField
            value={form.state}
            name="state"
            onChange={onChange}
            label="Estado"
            variant="outlined"
            className="Input_locus"
            required
        />
       
        
       <SignUpButtonContainer>
          <Button
          type={"submit"} 
          fullWidth
          variant={"contained"}
          color={"primary"}>
            Criar
          </Button>
        </SignUpButtonContainer>

        </form>
        </div>
    )
}
export default Adress