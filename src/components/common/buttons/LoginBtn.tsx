import { Button } from "antd";
import { useContext } from "react";
import { AuthContext, useAuth } from "../../../context/AuthContext";

type Props = {
  onLogin: Function;
};

function LoginBtn() {
  const { user, loginWithGoogle, logout } = useAuth();

  const handleLogin = () => {
    loginWithGoogle();
  };

  const handleLoguot = () => {
    logout();
  };

  return (
    <>
      <Button
        title="login"
        type="primary"
        onClick={user ? handleLoguot : handleLogin}
      >
        {user ? "Logout" : "Login"}
      </Button>
    </>
  );
}

export default LoginBtn;
