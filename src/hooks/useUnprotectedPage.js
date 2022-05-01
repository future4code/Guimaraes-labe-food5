import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToSearchRestaurantPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToSearchRestaurantPage(navigate);
    }
  }, [navigate]);
};

export default useUnprotectedPage;
