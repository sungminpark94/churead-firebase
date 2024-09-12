import React from "react";
import InputField from "../components/InputField";
import LoginButton from "../components/LoginButton";
import { Link } from "react-router-dom";

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
      <h1>
        <img src="./images/logo.svg" alt="churead로고" />
      </h1>
      <h3 className="text-red">Churead에서 소통해보세요</h3>
      {/* START: 폼 영역 */}
      <form id="login-form">
        <InputField />
        <InputField />
        <LoginButton />
      </form>
      {/* END: 폼 영역 */}
      <div>
        <p>계정이 없으신가요?</p>
        <Link>가입하기</Link>
      </div>
      {/* START: 소셜 로그인 영역 */}
      <LoginButton />
      {/* END: 소셜 로그인 영역 */}
    </div>
  );
};

export default Login;
