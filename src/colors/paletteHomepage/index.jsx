import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Palette from '../paletteGrid/palette';
import palettes from '../../data/paletteData/palettes';
import colorsInPalettes from '../../data/paletteData/colorsInPalettes';
import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createFilterOptions } from '@mui/material/Autocomplete';
import FavoriteIconFilled from '../paletteGrid/detailIcons/favoriteIconFilled';
import FavoriteIconEmpty from '../paletteGrid/detailIcons/favoriteIconEmpty';

import './paletteHomepage.css';

function PaletteHomepage() {
  const allIds = Object.keys(palettes);
  const [ids, setIds] = useState(Object.keys(palettes));
  const [pageSize] = useState(72);
  const [page, setPage] = useState(1);
  const [palettesToShow, setPalettesToShow] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState(null);
  const [localStorageData, setLocalStorageData] = useState(new Set(JSON.parse(localStorage.getItem(`huebert`))));
  const [favoriteFiltering, setFavoriteFiltering] = useState(false);

  const saveToLocalStorage = (data) => {
    console.log(data);
    setLocalStorageData(data);
    localStorage.setItem('huebert', JSON.stringify(Array.from(data)));
  }

  useEffect(() => {
    let storage = localStorage.getItem(`huebert`);
    if(storage) {
      let jsonStorage = JSON.parse(storage);
      console.log(jsonStorage);
      let set = new Set(jsonStorage);
      setLocalStorageData(set);
    } else {
      setLocalStorageData(new Set());
    }

    const palettesForShow = [];
    ids.slice(0, pageSize).forEach(id => {
      palettesForShow.push({ id, ...palettes[id]});
    });
    
    setPalettesToShow(palettesForShow);
  }, [ids, pageSize]);

  useEffect(() => {
    const palettesForShow = [];
    ids.slice(0, pageSize*page).forEach(id => {
      palettesForShow.push({ id, ...palettes[id]});
    });
    setPalettesToShow(palettesForShow);
  }, [ids, page, pageSize]);

  const filterByRandomColor = () => {
    let random = Math.floor(Math.random() * colorsInPalettes.length);
    let colorName = colorsInPalettes[random];
    filterByColor(colorName);
  }

  const showAllColors = () => {
    setPage(1);
    setSelectedColor(null);
    setFavoriteFiltering(false);
    setIds(allIds);
  }

  const chooseColor = (event, value) => {
    if(value === null) {
      showAllColors();
    } else {
      filterByColor(value);
    }
  }

  const fetchMoreData = () => {
    setPage(page+1);
  };

  const filterByColor = (colorName) => {
    let filteredList = Object.keys(palettes).filter(id => {
      let palette = palettes[id];
      let retVal = false;
      palette.colors.forEach(color => {
        if(color.colorName === colorName) {
          retVal = true;
        }
      })
      return retVal;
    });
    
    setIds(filteredList);
    setPage(1);
    setSelectedColor(colorName);
  }

  const filterByFavorite = () => {
    if(favoriteFiltering) {
      setFavoriteFiltering(false);
      showAllColors();
    } else {
      let filteredList = Object.keys(palettes).filter(id => {
        return localStorageData.has(id)
      });
      setIds(filteredList);
      setFavoriteFiltering(true);
      setPage(1);
    }
  }

  if(palettesToShow) {
    return <div className={`colors-container colors-link`} >
      <div className="stickyContainer">
        <div className="sticky">
          <Autocomplete
            style={{ width: '300px', marginLeft: '30px', marginTop: '-10px' }}
            options={colorsInPalettes}
            filterOptions={createFilterOptions({
              matchFrom: 'any',
              limit: 500,
            })}
            onChange={chooseColor}
            value={selectedColor}
            renderInput={(params) => <TextField {...params} margin="normal" />}
          />

          <Button className="header-button" variant="outlined" onClick={filterByRandomColor}>Random Color</Button>
          {favoriteFiltering || selectedColor !== null ? <Button className="header-button" variant="outlined"  onClick={showAllColors}>Show All Colors</Button> : null}
        </div>
        <div>
          <Button className="header-button" onClick={filterByFavorite}>
            <div style={{width: '30px', marginTop: '3px', color: favoriteFiltering ? '#E9CC64' : 'black'}}>
              {favoriteFiltering ? <FavoriteIconFilled /> : <FavoriteIconEmpty /> }
            </div>
          </Button> 
          <Button className="header-button" variant="outlined"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            To Top
          </Button>
        </div>
      </div>

      <div>
        <InfiniteScroll
          dataLength={palettesToShow.length}
          next={fetchMoreData}
          hasMore={ids.length > palettesToShow.length}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          loader={<h4>Loading...</h4>}
        >
          <div style={{display: 'flex', justifyContent: 'center', flexFlow: 'row wrap', width: '90%', margin: 'auto'}}>
            {palettesToShow.map((palette) => {
              return <Palette key={`paletteGrid-${palette.id}`} palette={palette} filteredColor={selectedColor} pinColor={filterByColor} localStorageData={localStorageData} saveToLocalStorage={saveToLocalStorage}/>
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  } else {
    return null;
  }
}

export default PaletteHomepage;