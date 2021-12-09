import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Header from "./Components/Header";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    /* Viene eseguito solamente quando viene caricata il componente app */
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is: ", authUser);

      if (authUser) {
        /* Se l'utente si è loggato o è satto loggato in precedenza */
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        /* L'utente non si è mai loggato */
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Schermata di login */}
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>

          {/* Schermata di checkout */}
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          ></Route>

          {/* Schermata Home */}
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* Per cambiare URL all'occorrenza utilizzo React-ROUTER
 * localhost.com/login
 * localhost.com/checkout
 */
