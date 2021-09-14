import React, { useState } from 'react';
import '../styles/style.css';
import Card from '../components/Card';
import Create from '../components/Create';
// import Nav from '../components/Nav';

function HomePage() {
  const key = '563492ad6f91700001000001e29189a8073847c1af5449418a3579c9';
  const [msg, setMsg] = useState([]);
  return (
    <>
      {/* <Nav /> */}
      <div className="section">
        <h1>串接 API</h1>
        <Create msg={msg} setMsg={setMsg} />
        <Card msg={msg} setMsg={setMsg} />
      </div>
    </>
  );
}

export default HomePage;
