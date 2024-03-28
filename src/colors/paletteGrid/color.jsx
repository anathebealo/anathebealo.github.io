import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chroma from 'chroma-js';
import Filter from './detailIcons/filter';

import SearchIcon from './detailIcons/searchIcon';

const Palette = ({ hex, colorName, filteredColor, pinColor }) => {
  let navigate = useNavigate(); 
  const [textColor, setTextColor] = useState(hex);
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    setTextColor(hex);
  }, [hex, colorName]);

  const onHover = () => {
    setTextColor(chroma(hex).hsl()[2] > .6 ? 'black' : 'white');
    setWidth(30);
  }

  const onBlur = () => {
    setTextColor(hex);
    setWidth(undefined);
  }
  
  const togglePin = () => {
    pinColor(colorName);
  }

  const goToColors = () => {
    navigate(`/colors/${hex.replace('#', '')}`);
  }

  return <div 
    key={`${colorName} + ${hex}`} 
    style={{ width: width ? '35%' : '20%', borderBottom: filteredColor === colorName ? '7px solid white' : 'none', backgroundColor: hex, display:'flex', flexDirection:'row', justifyContent: 'center', transition: 'width .25s' }}
    onMouseOver={onHover} 
    onMouseOut={onBlur}
  >
    <div style={{display:'flex', flexDirection:'column', alignContent: 'space-between' }}>
      <div style={{height: '80%'}}>
        <p style={{color: textColor, fontSize:'16px', textAlign: 'center'}}><strong>{hex.toString().toUpperCase().replace('#', '')}</strong></p>
        <p style={{color: textColor, fontSize:'12px', textAlign: 'center'}}>{colorName}</p>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '10%'}}>
        <button style={{color: textColor, backgroundColor: 'transparent', border: 'none', padding:'0px', cursor: 'pointer', width: '16px', margin: '0px'}}
          onClick={() => togglePin(colorName)}>
          <Filter />
        </button>
        <button style={{backgroundColor: 'transparent', border: 'none', width: '30px'}}></button>
        <button style={{color: textColor, backgroundColor: 'transparent', border: 'none', padding:'0px', cursor: 'pointer', width: '16px', margin: '0px', marginLeft: '5px'}} onClick={goToColors}>
          <SearchIcon />
        </button>
      </div>
    </div>
  </div>
}

export default Palette;
