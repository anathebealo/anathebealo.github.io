import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, HashRouter, Outlet } from "react-router-dom";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import NoMatch from './NoMatch';
import HomePage from './HomePage';
import HeaderBar from './HeaderBar';
import PaletteHomepage from './colors/paletteHomepage';
import ColorHomepage from './colors/colorHomepage';
import PaletteDetailPage from './colors/paletteDetailPage';

import Recipes from './recipes';
import Recipe from './recipes/recipe';
import Projects from './Projects';
import Photos from './Photos';
import About from './About';
import Travel from './About/travel';

function App() {
  let [colors, setColors] = useState([]);

  useEffect(() => {
    const foo = async () => {
      try {
        const response = await fetch('https://mf811m0pdf.execute-api.us-east-2.amazonaws.com/color/random')
        const data = await response.json();
        if(data.length > 0 && data[0].colors) {
          setColors(data[0].colors.map(x => x.hex));
        }
      } catch(error) {
        console.error(error)
      }
    }
    foo();
  }, []);

  const updateColors = async () => {
    try {
      const response = await fetch('https://mf811m0pdf.execute-api.us-east-2.amazonaws.com/color/random')
      const data = await response.json();
      if(data.length > 0 && data[0].colors) {
        setColors(data[0].colors.map(x => x.hex));
      }
    } catch(error) {
      console.error(error)
    }
  }

  if(colors.length === 0) {
    return <div>Loading...</div>
  }

  return <LocalizationProvider dateAdapter={AdapterDayjs}>
    <HashRouter>
      <Routes>
        <Route index={true} path="/" element={<HomePage 
            refreshColors={updateColors}
            colors={colors}
          />} 
        />
        <Route element={ <div><HeaderBar colors={colors} /> <Outlet /></div>} >
          <Route path="/colors">
            <Route index={true} element={<PaletteHomepage toggleMode={() => {}} isDark={false}/>} /> 
            <Route path=":hex" element={<ColorHomepage />} /> 
          </Route>

          <Route path="/palette/:id" element={<PaletteDetailPage/>} />

          <Route path="/recipes">
            <Route index={true} element={ <Recipes />}/> 
            <Route path=":recipe" element={ <Recipe />} /> 
          </Route>

          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about">
            <Route index={true} element={<About />} />
          </Route>
          <Route path="/travel" element={<Travel />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  </HashRouter>
</LocalizationProvider>
}

export default App;
