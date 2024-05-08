import React from 'react';
import './Content.css'

const Content = () => {

  return (
    <div>
      <div className='x'>
        <center><h1>OUR <span className='sp'>JS.</span> GAMES</h1></center>
        <div className='content'>
          
          <a href='games/XO.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/xo.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>TIC TAC TOE</h3>
            </div>
          </a>
          <a href='games/BallGame.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/red-ball.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>MINI BALL</h3>
            </div>
          </a>
          <a href='games/pingPong.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/pong.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>PING PONG</h3>
            </div>
          </a>
          <a href='games/runner.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/fly.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>FLY IT</h3>
            </div>
          </a>
          <a href='games/snake.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/snake.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>THE SNAKE</h3>
            </div>
          </a>

          <a href='games/snake2.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/snake2.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>FAST SNAKE</h3>
            </div>
          </a>
          <a href='games/stick Hero.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/stick.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>STICK HERO</h3>
            </div>
          </a>
          <a href='games/the maze.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/maze.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>THE MAZE</h3>
            </div>
          </a>
          <a href='games/Scramble.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/scramble.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>SCRAMBLE</h3>
            </div>
          </a>
          <a href='games/2048.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/2048.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>2048</h3>
            </div>
          </a>
          
          <a href='games/Blast.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/blast2.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>BLAST</h3>
            </div>
          </a>
          <a href='games/snake3.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/snake3.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>SNAKE 3</h3>
            </div>
          </a>
          <a href='games/sodoku.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/suduku.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>SUDUKU</h3>
            </div>
          </a>
          <a href='games/tiris.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/tetris.jpg'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>tetris</h3>
            </div>
          </a>
          <a href='games/memory.html'>
            <div class="cardo" >
              <img src={process.env.PUBLIC_URL + 'images/memory-game.png'} alt='AN IMG SUPPOSED TO BE HERE' className='cim' />
              <h3>MEMORY</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;