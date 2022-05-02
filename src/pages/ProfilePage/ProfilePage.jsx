import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Name, Title, Email, Span, Rectangle, Container, Bar } from "./styled";
import CreateIcon from "@mui/icons-material/Create";

const ProfilePage = () => {
  useProtectedPage();

  const navigate = useNavigate();

  const [profileList, setProfileList] = useState([]);

  const data = {
    profileList,
    setProfileList,
  };

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getProfile(data);
  }, [profileList]);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}/profile`, headers)
      .then((res) => {
        setProfileList(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Bar>
        <Title>Meu Perfil</Title>
      </Bar>

      <div>
        <Name>{profileList.name}</Name>
        <Email>{profileList.email}</Email>
        <Span>{profileList.cpf}</Span>
        <button>
          <CreateIcon></CreateIcon>
        </button>
      </div>

      <Rectangle>
        <p>Endereço cadastrado: {profileList.address}</p>
        <button>
          <CreateIcon></CreateIcon>
        </button>
      </Rectangle>

      <span>Histórico de Pedidos</span>
    </Container>
  );
};
export default ProfilePage;
