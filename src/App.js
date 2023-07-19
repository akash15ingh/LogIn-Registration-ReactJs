import "./App.css";
import { useState } from "react";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");

  const ToggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={ToggleForm} />
      ) : (
        <Registration onFormSwitch={ToggleForm} />
      )}
      {/* <Login />
      <Registration /> */}
    </div>
  );
}

export default App;
