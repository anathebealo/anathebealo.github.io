import AnimatedLink from '../AnimatedLink';
import './homepage.css';
import chroma from 'chroma-js';
import LightBox from './lightBox';
import Info from '../icons/Info';
import { useState } from 'react';

function HomePage({ colors, refreshColors }) {
  const [visibleInfo, setVisibleInfo] = useState(false);
  const changeColors = () => {
    refreshColors();
  }

  const showInfo = () => {
    setVisibleInfo(!visibleInfo);
  }

  return (<div style={{ display: 'flex', 'justifyContent': 'center'}}>
      <div className='disco-hall'>
        {Array.apply(null, Array(19)).map(x => {
          return <div className='disco-row'>
            {Array.apply(null, Array(35)).map(y => {
              return <LightBox colors={colors} />
            })}
          </div>
        })}
      </div>
  
      <div className='homepage'>
        <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>Ana Hanna</h1>
        <p style={{ fontSize: '1em', fontStyle: 'italic', marginTop: '10px' }}>Traveler, Gardener, Mother, Programmer, Baker, Friend</p>
        {colors.length > 0 && <div className='linkContainer'>
          <AnimatedLink to="/colors">
            <div className='colors-link linkDiv' style={{ backgroundColor: colors[0], color: `${chroma(colors[0]).hsl()[2] > .6 ? 'black' : 'white'}` }}>
              <h3>Huebert</h3>
              <p>Color Palette Exploration</p>
            </div>
          </AnimatedLink>
          <AnimatedLink to="/recipes">
            <div className='recipe-link linkDiv' style={{ backgroundColor: colors[1], color: `${chroma(colors[1]).hsl()[2] > .6 ? 'black' : 'white'}` }}>
              <h3>Recipes</h3>
              <p>My favorite recipes</p>
            </div>
          </AnimatedLink>
          <AnimatedLink to="/projects">
            <div className='projects-link linkDiv' style={{ backgroundColor: colors[2], color: `${chroma(colors[2]).hsl()[2] > .6 ? 'black' : 'white'}` }}>
              <h3>Other Projects</h3>
              <p>Other small projects</p>
            </div>
          </AnimatedLink>
          <AnimatedLink to="/photos">
            <div className='photos-link linkDiv' style={{ backgroundColor: colors[3], color: `${chroma(colors[3]).hsl()[2] > .6 ? 'black' : 'white'}` }}>
              <h3>Photo Gallery</h3>
              <p>My favorite photos</p>
            </div>
          </AnimatedLink>
          <AnimatedLink to="/About">
            <div className='resume-link linkDiv' style={{ backgroundColor: colors[4], color: `${chroma(colors[4]).hsl()[2] > .6 ? 'black' : 'white'}` }}>
              <h3>About</h3>
              <p>All about me!</p>
            </div>
          </AnimatedLink>
        </div>}
      </div>
      <div className="colorCorner">
        <div className="colorInfoContainer">
          <button className="colorButton" onClick={changeColors}>Change Colors</button>
          <div className="iconStyle" onMouseEnter={showInfo} onMouseLeave={showInfo}>
            <Info />
          </div>
        </div>
        <div className={`infoBlob ${visibleInfo ? 'bigInfoBlob' : 'smallInfoBlob'}`}>
          <p className={`infoText ${visibleInfo ? 'visible' : 'hidden'}`}>The colors on this page are random color palettes from Huebert. Some are pretty ugly...click to find one you like!</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
