import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { Login } from "./Login";
import { ThemeContext } from "../Context/ThemeProvider";

const Header = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  // const [{ theme, themeData }] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);

  const logInUser = () => {
    return <Login />;
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          padding: "0px",
          color: currentTheme.color,
          backgroundColor: currentTheme.background
        }}
      >
        <div>
          <h1>My Dashboard</h1>
        </div>
        <div style={{ marginTop: "20px" }}>
          {isAuth ? (
            <button
              style={{
                border: "none",
                background: "turquoise",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "16px",
                width: "120px",
                cursor: "pointer"
              }}
              onClick={() => setIsAuth(false)}
            >
              SIGN OUT
            </button>
          ) : (
            <button
              style={{
                border: "none",
                background: "turquoise",
                padding: "10px",
                borderRadius: "5px",
                fontSize: "16px",
                width: "120px",
                cursor: "pointer"
              }}
              // onClick={() => setIsAuth(true)
              onClick={logInUser}
            >
              SIGN IN
            </button>
          )}
        </div>
        <div style={{ marginTop: "30px" }}>
          {/* <button onClick={toggleTheme}> */}
          Switch to {theme === "light" ? "dark" : "light"} Mode
          {/* </button> */}
          <label className="themeBox">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="themeSlider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
