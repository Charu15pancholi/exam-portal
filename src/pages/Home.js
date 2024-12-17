// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';
// import person1 from '../assets/images/person1.png';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div>
      <Menu />
      <center>
        <img src={"person1"} alt="Person" height="300px" width="300px" />
        <br />
        <Button>Admin</Button>
        <br />
        <Button>Student</Button>
      </center>
    </div>
  );
};

export default Home;
