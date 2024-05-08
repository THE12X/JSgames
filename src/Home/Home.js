import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='body'>
      <div className='container'>
        <div className='s1'>
          <div className='cont'>
            <h1 className='title'><span className='link'>JAVASCRIPT.</span> GAMES</h1>
            <p className='p'>WELCOME TO <span className='link'>JS.</span> GAMES, LET'S PLAY SOME GAMES FULLY DEVELOPPED USING <span className='link'>JAVASCRIPT</span> !
             TRY IT AND LET SOME FEED BACK , OR CONTACT US FROM <Link className='hand' to="/about">→ HERE.</Link></p>
            <Link to="/content"><button className='btn'>SURF NOW</button></Link>
          </div>
        </div>
        <div className='s2'>
          <img src={process.env.PUBLIC_URL+'js.png'} alt='AN IMG SUPPOSED TO BE HERE' className='img'/>
        </div>
      </div>
    </div>
  );
};

export default Home;