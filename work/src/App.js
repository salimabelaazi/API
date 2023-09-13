import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [uset, setUser] = useState()

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        setData(response.data)
      )
      .catch(function (error) {
        console.log(error);
      }
      )
  }, [])




  console.log(data);

  // const handleSubmit = (e) => {
  //   e.preventDefault
  //   axios
  //     .post("/user", {
  //       firstName: "Fred",
  //       lastName: "Flintstone"
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }



  return (
    <div className="App">
      <h> WoRKSHOP API</h>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form> */}
      <ul>
        {data.map(user => (
          <li key={user.id}>
            {user.name}

          </li>
        )
        )}
      </ul>

    </div>
  );
}

export default App;
