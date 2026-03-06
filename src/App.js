import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage.js";
import { InfoProvider } from "./Context/Infocontext.js";
import Login from "./components/Login.js";
import { useEffect } from "react";
import { auth } from "./services/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Context/StateProvider.js";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("the user is >>>>", user);

      if (user) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //<Header />  independent of routes..will be rendered in every single page
    <InfoProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <CheckoutPage />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </InfoProvider>
  );
}

export default App;
