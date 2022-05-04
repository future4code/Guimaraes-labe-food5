export const goToHomePage = (navigate) => {
  navigate(`/`);
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToLoginPage = (navigate) => {
  navigate(`/login`);
};

export const goToSignUpPage = (navigate) => {
  navigate(`/cadastro`);
};

export const goToCartPage = (navigate) => {
  navigate(`/carrinho`);
};

export const goToProfilePage = (navigate, id) => {
  navigate(`/perfil/${id}`);
};

export const goToOnGoingPage = (navigate) => {
  navigate(`/pedido-em-andamento`);
};

export const goToRestaurantPage = (navigate, restauranteId) => {
  navigate(`/restaurante/${restauranteId}`);
};

export const goToSearchRestaurantPage = (navigate) => {
  navigate(`/restaurantes`);
};

export const goToFeedPage = (navigate) => {
  navigate(`/home`);
}

export const goToEditProfile = (navigate) =>{
  navigate(`/editProfile`)
}

export const goToEditAddress = (navigate) =>{
  navigate(`/editAddress`)
}