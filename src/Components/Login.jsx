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
    <form
      onSubmit={handleSubmit}
      style={{
        width: "400px",
        margin: "auto",
        background: "black",
        color: "white",
        padding: "50px"
      }}
    >
      <div>
        <label>
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Enter Email"
              style={{
                border: "1px solid white",
                borderBottom: "2px solid white",
                fontSize: "16px",
                background: "black",
                width: "300px",
                padding: "5px",
                color: "white",
                borderRadius: "20px",
                height: "30px",
                paddingLeft: "20px"
              }}
            />
          </div>
        </label>
      </div>
      <br />

      <div>
        <label>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" Enter password"
              style={{
                border: "1px solid white",
                borderBottom: "2px solid white",
                fontSize: "16px",
                background: "black",
                width: "300px",
                padding: "5px",
                color: "white",
                borderRadius: "20px",
                height: "30px",
                paddingLeft: "20px"
              }}
            />
          </div>
        </label>
      </div>
      <br />
      <div>
        <input
          type="submit"
          style={{
            height: "40px",
            width: "150px",
            borderRadius: "30px",
            fontSize: "20px"
          }}
          value="Sign in"
        />
      </div>
    </form>
  );
};

export { Login };
