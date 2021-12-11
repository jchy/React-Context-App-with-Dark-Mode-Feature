import { useContext } from "react";
import { AppContext } from "../Context/ApplicationContextProvider";
import { ThemeContext } from "../Context/ThemeProvider";
import { Login } from "./Login";

const Body = () => {
  const [isAuth, setIsAuth] = useContext(AppContext);
  const [{ theme, themeData }, toggleTheme] = useContext(ThemeContext);

  const currentTheme = themeData[theme];
  console.log(currentTheme);

  const logInUser = () => {
    return <Login />;
  };

  if (isAuth) {
    return (
      <>
        <div
          style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.background,
            display: "flex",
            border: "1px solid aqua",
            padding: "50px"
          }}
        >
          <div style={{ border: "1px solid aqua", fontSize: "30px" }}>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              <img
                src="https://media.pitchfork.com/photos/5f3b196deb982d18c453e0f1/4:3/w_2704,h_2028,c_limit/barack-obama.jpg"
                alt="img"
                height="60px"
                width="60px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              ▶︎
            </div>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              ☞
            </div>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              ⍾
            </div>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              🗯
            </div>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              📋
            </div>
            <div style={{ padding: "20px", borderBottom: "1px solid aqua" }}>
              📽
            </div>
          </div>

          <div style={{ paddingRight: "20px" }}>
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
              <div
                style={{ width: "300px", fontWeight: "700", fontSize: "30px" }}
              >
                <p>My Dashboard</p>
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

            <div style={{ border: "1px solid aqua", marginLeft: "30px" }}>
              <div style={{ borderBottom: "1px solid gray" }}>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "70%",
                      textAlign: "left",
                      paddingLeft: "20px",
                      fontSize: "24px"
                    }}
                  >
                    <p>Active Users</p>
                  </div>
                  <div style={{ width: "30%", marginTop: "30px" }}>
                    for December 2021▾
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "15%" }}>
                      <img
                        src="https://images.yourstory.com/cs/images/people/Nrupul-1597757992384.jfif"
                        alt="img"
                        height="60px"
                        width="60px"
                        style={{ borderRadius: "50%", marginTop: "10px" }}
                      />
                    </div>
                    <div
                      style={{
                        width: "75%",
                        textAlign: "left",
                        lineHeight: "2px",
                        marginTop: "10px"
                      }}
                    >
                      <p>Nrupul Dev</p>
                      <p style={{ color: "gray", fontSize: "12px" }}>
                        Banglore India
                      </p>
                    </div>
                    <div style={{ width: "10%" }}>...</div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        height: "10px",
                        background: "green",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        width: "70%",
                        marginLeft: "20px",
                        marginTop: "10px"
                      }}
                    ></div>
                    <div
                      style={{
                        height: "8px",
                        background: "gray",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                        width: "30%",
                        marginTop: "11px",
                        marginRight: "20px"
                      }}
                    ></div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "70%",
                        textAlign: "left",
                        paddingLeft: "20px"
                      }}
                    >
                      <p>Professional Level 15</p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <h4>4723 Points</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ borderBottom: "1px solid gray" }}>
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "15%" }}>
                      <img
                        src="https://www.indiewire.com/wp-content/uploads/2020/09/Kate-Winslet.jpg"
                        alt="img"
                        height="60px"
                        width="60px"
                        style={{ borderRadius: "50%", marginTop: "10px" }}
                      />
                    </div>
                    <div
                      style={{
                        width: "75%",
                        textAlign: "left",
                        lineHeight: "2px",
                        marginTop: "10px"
                      }}
                    >
                      <p>Kate Winslet</p>
                      <p style={{ color: "gray", fontSize: "12px" }}>
                        Hollywood, USA
                      </p>
                    </div>
                    <div style={{ width: "10%" }}>...</div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        height: "10px",
                        background: "blue",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        width: "55%",
                        marginLeft: "20px",
                        marginTop: "10px"
                      }}
                    ></div>
                    <div
                      style={{
                        height: "8px",
                        background: "gray",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                        width: "45%",
                        marginTop: "11px",
                        marginRight: "20px"
                      }}
                    ></div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "70%",
                        textAlign: "left",
                        paddingLeft: "20px"
                      }}
                    >
                      <p>Professional Level 11</p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <h4>2339 Points</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "15%" }}>
                      <img
                        src="https://d1qxviojg2h5lt.cloudfront.net/images/01EMFP0XQR0D72118F92JHQ0XB/elon_musk400.png"
                        alt="img"
                        height="60px"
                        width="60px"
                        style={{ borderRadius: "50%", marginTop: "10px" }}
                      />
                    </div>
                    <div
                      style={{
                        width: "75%",
                        textAlign: "left",
                        lineHeight: "2px",
                        marginTop: "10px"
                      }}
                    >
                      <p>Elon Musk</p>
                      <p style={{ color: "gray", fontSize: "12px" }}>
                        California, USA
                      </p>
                    </div>
                    <div style={{ width: "10%" }}>...</div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        height: "10px",
                        background: "purple",
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        width: "40%",
                        marginLeft: "20px",
                        marginTop: "10px"
                      }}
                    ></div>
                    <div
                      style={{
                        height: "8px",
                        background: "gray",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                        width: "60%",
                        marginTop: "11px",
                        marginRight: "20px"
                      }}
                    ></div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "70%",
                        textAlign: "left",
                        paddingLeft: "20px"
                      }}
                    >
                      <p>Professional Level 6</p>
                    </div>
                    <div style={{ width: "30%" }}>
                      <h4>1884 Points</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h3>Please login to continue with the site</h3>
      </div>
    );
  }
};
export default Body;
