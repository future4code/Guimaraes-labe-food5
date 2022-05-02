import React, { useState, useEffect } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

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
    <div>
      <h3>Meu Perfil</h3>
      <p>{profileList.name}</p>
      <p>{profileList.email}</p>
      <p>{profileList.cpf}</p>
      <button>Editar Perfil</button>

      <div>
        <p>Endereço cadastrado: {profileList.address}</p>
        <button>Editar Endereço</button>
      </div>
    </div>
  );
};
export default ProfilePage;
