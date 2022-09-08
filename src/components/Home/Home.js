import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>

        <h1> <span style={{color: "blue"}}>Welcome !</span> </h1>
        <hr/>
        <p>
            <h2>
                This application is designed <br/>to provide solution to <br/>basic oil field cementation problems
            </h2>
            <p>
                Please Click Link Below to Continue
            </p>
        </p>
          <Link to="/navigation">Material ui icon here</Link>
    </div>
  )
}

export default Home