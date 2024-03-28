import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Color from './color';
import SrcLinkIcon from './detailIcons/srcLinkIcon';
import ExpandColorIcon from './detailIcons/expandColorIcon';
import DownloadIcon from './detailIcons/downloadIcon';
import FavoriteIconEmpty from './detailIcons/favoriteIconEmpty';
import FavoriteIconFilled from './detailIcons/favoriteIconFilled';
import paletteDetails from '../../data/paletteData/palettesExtraData';

function Palette({ palette, filteredColor, pinColor, localStorageData, saveToLocalStorage }) {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorited, setIsFavorited] = useState(localStorageData.has(palette.id));

  const onHover = () => {
    setShowDetails(true);
  }

  const onBlur = () => {
    setShowDetails(false);
  }

  const toggleFavorite = () => {
    console.log(localStorageData);
    if(localStorageData && localStorageData.size !== 0) {
      if(localStorageData.has(palette.id)) {
        localStorageData.delete(palette.id);
        setIsFavorited(false);
      } else {
        localStorageData.add(palette.id);
        setIsFavorited(true);
      }      
      saveToLocalStorage(localStorageData);
    } else {
      let set = new Set();
      set.add(palette.id);
      setIsFavorited(true);
      saveToLocalStorage(set);
    }
  }

  const downloadPalette = (color) => {
    console.log('downloading Color Palette');
  }

  const gotToPalette = () => {
    navigate(`/palette/${palette.id}`);
  }

  const buttonStyle = { backgroundColor: 'transparent', border: 'none', padding:'0px', width:'20px', marginLeft: '10px', color: 'black', cursor: 'pointer'};
  const details = <div style={{width: '50px'}}> 
    {showDetails
      ? <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <button style={{...buttonStyle, width: '18px', marginTop: '2px'}}
            onClick={gotToPalette}>
            <ExpandColorIcon />
          </button>
          {paletteDetails[palette.id] && paletteDetails[palette.id].src && <a href={paletteDetails[palette.id].src} style={{ marginLeft: '10px', color: 'black', width: '20px', fontSize: '16px'}}>
            <SrcLinkIcon />
          </a>}
          <button style={buttonStyle}
            onClick={downloadPalette}>
            <DownloadIcon />
          </button>
          <button style={buttonStyle}
            onClick={toggleFavorite}>
            { isFavorited
              ? <FavoriteIconFilled />
              : <FavoriteIconEmpty />
            }
          </button>
        </div>
      : null
    }
  </div>

  return <div
      style={{ margin: '20px', marginTop: '10px', height: '150px', display:'flex', flexDirection:'row'}}
      onMouseEnter={onHover} 
      onMouseLeave={onBlur}>
    <div key={`container ${palette.id}`} style={{ display:'flex', flexDirection:'row', borderRadius: '10px', overflow:'hidden', width: `${palette.colors.length*80}px`, border: showDetails ? '1px solid black' : '1px solid lightgray' }}>
      {palette.colors.map((color) => 
        <Color key={`color ${palette.id} ${color.hex}`} hex={color.hex} colorName={color.colorName} filteredColor={filteredColor} pinColor={pinColor} />
      )}
    </div>
    {details}
  </div>
}

export default Palette;
