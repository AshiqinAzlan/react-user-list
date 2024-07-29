import React, { useState } from "react";
import userData from "./Components/UserData";

function App() {
  const [users, setUsers] = useState(userData);
  return (
    <div>
      <ul class="list-group list-group-flush">
        {users.map((user) => (
          <li class="list-group-item">
            <li class="list-group-item">User Id: {user.userId}</li>
            <li class="list-group-item">Name: {user.name}</li>
            <li class="list-group-item">Phone: {user.phone}</li>
            <li class="list-group-item">Email: {user.email}</li>
            <li class="list-group-item">Country: {user.country}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
