import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [backendUrl, setBackendUrl] = useState("");
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    setBackendUrl(process.env.REACT_APP_BACKEND_URL);
  }, []);

  useEffect(() => {
    if (backendUrl === "") {
      // do nothing
    } else {
      console.log(process.env.REACT_APP_BACKEND_URL);
      setUserList("");
      fetch(backendUrl + "/users/")
        .then((response) => response.json())
        .then((data) => {
          console.log("Data from /users/ is: " + JSON.stringify(data));
        });
    }
  }, [backendUrl]);

  return (
    <div className="App">
      <h1>User List</h1>
      <h2>Backend URL is: {backendUrl}</h2>
      {userList && (
        <div>
          {userList.map((user) => {
            return <h1>User exists</h1>;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
