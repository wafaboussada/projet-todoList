import React from 'react';
import { useHistory } from "react-router-dom";
const Home = () => {
  let history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (email === 'test@test.com' && password === 'test') {
      history.push("/tasks");
      localStorage.setItem('is_connected', true);
    }
  }
  return (
    <div className="connexion-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Adresse e-mail</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default Home
