import React, { useState, useContext } from "react";
import { LoginUser } from "./LoginUser";
import { AppContext } from "../Context/ApplicationContextProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [isAuth, setIsAuth] = useState(false);
  const [isToken, setIsToken] = useState("");

  const [isAuth, setIsAuth] = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    LoginUser({ email, password })
      .then((res) => {
        setIsAuth(true);
        setIsToken(res.data.token);
      })
      .catch((err) => {
        console.log("Error is ", err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isAuth) {
    return (
      <div style={{ fontSize: "12px", color: "gray" }}>
        <p> For any Query feel free to Mail Us on : contact@admin.mail.com </p>
        <p> Customer Support is availabe 24×7</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          email :{" "}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="...Enter Email"
          />
        </label>
      </div>
      <br />

      <div>
        <label>
          Password :{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="...Enter password"
          />
        </label>
      </div>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export { Login };
