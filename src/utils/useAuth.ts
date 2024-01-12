import { useSelector } from "react-redux";
import { selectUser } from "../features/authSlice";
import { isTokenExpired } from "./authUtils"


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from "../features/store";

const useAuth = () => {
  const accessToken = useSelector((state: RootState) => state.auth.user?.access_token);


  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken || isTokenExpired(accessToken)) {
      // Token is expired, navigate to login
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return accessToken;
};

export default useAuth;
