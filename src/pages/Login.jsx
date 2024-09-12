import React from "react";
import InputField from "../components/InputField";

const Login = () => {
  // logic
  // const history = useNavigate();

  // const goToHome = () => {
  //   history("/");
  // };

  // view
  return (
    <div>
      {/* <h2>Login</h2> */}
      {/* <button type="button" onClick={goToHome}>
        Home화면으로 이동
      </button> */}
      {/* <Link to={"/"} style={{ color: "red" }} className="link">
        Home화면으로 이동
      </Link> */}
      <h3>Churead에서 소통해보세요</h3>
      <InputField />
      <InputField />
    </div>
  );
};

export default Login;
