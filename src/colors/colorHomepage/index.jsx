import { useState } from 'react';
import chroma from 'chroma-js';
import { useParams } from 'react-router-dom';
import RelatedColors from './relatedColors';
import ValueTable from './valueTable';
import names from '../../data/paletteData/colorNames';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Variation from './variation';
import blinder from 'color-blind';

const getDistance = (r0, g0, b0, r1, g1, b1) => {
  return Math.pow(r1-r0, 2) + Math.pow(b1-b0, 2) + Math.pow(g1-g0, 2);
}

const findClosestColorName = (colorHex) => {
  let r = chroma(colorHex)._rgb[0];
  let g = chroma(colorHex)._rgb[1];
  let b = chroma(colorHex)._rgb[2];

  let minDistance = { name: names[0].name, distance: getDistance(r, g, b, names[0].r, names[0].g, names[0].b) }

  names.forEach(obj => {
    let checkDistance = getDistance(r, g, b, obj.r, obj.g, obj.b);
    if(checkDistance < minDistance.distance) {
      minDistance.name = obj.name;
      minDistance.distance = checkDistance;
    }
  });

  return minDistance.name;
}

const card = {
  border: '1px solid lightgrey', borderRadius: '10px', padding: '20px', backgroundColor: 'white', width: '70%', maxWidth: '1100px', margin: 'auto', marginTop: '50px'
}

const ColorHomepage = () => {
  let inputHex = useParams().hex;

  const [inputVal, setInputVal] = useState(inputHex);
  const [hex, setHex] = useState(inputHex);

  const updateInput = (e) => {
    const input = e.target.value;
    if(!input) {
      setInputVal('');
    } else {
      try {
        chroma(input);
        setHex(input.replace('#', ''));
        setInputVal(input);
      } catch {
        setInputVal(input);
      }
    }
  }

  const hexString = chroma(hex).hex();
  const name = findClosestColorName(hex);
  const hsl = chroma(hex).hsl();

  const shades = chroma.scale([hex, 'black']).colors(12).slice(0, 10);
  const tints = chroma.scale([hex, 'white']).colors(12).slice(0, 10);
  const monochromes = chroma.scale(['black', hex, 'white']).colors(21).slice(5, 16);
  const tones = chroma.scale([hex, chroma.hsl(hsl[0], hsl[1] - (9*hsl[1]/10), hsl[2]).hex()]).colors(10);

  // subtract hex from white 
  const complementary1 = chroma(16777215 - parseInt(hex, 16)).hex();

  // rotate hue 180 deg around wheel - leave sat and light alone
  const complementaryHex2 = chroma.hsl(hsl[0]+180, hsl[1], hsl[2]).hex();

  // analagous
  const ana1 = chroma.hsl(hsl[0] - 30, hsl[1], hsl[2]).hex();
  const ana2 = chroma.hsl(hsl[0] + 30, hsl[1], hsl[2]).hex();

  // triadic
  const triad1 = chroma.hsl(hsl[0] - 120, hsl[1], hsl[2]).hex();
  const triad2 = chroma.hsl(hsl[0] + 120, hsl[1], hsl[2]).hex();

  // triadic
  const tetrad1 = chroma.hsl(hsl[0] + 90, hsl[1], hsl[2]).hex();
  const tetrad2 = chroma.hsl(hsl[0] + 180, hsl[1], hsl[2]).hex();
  const tetrad3 = chroma.hsl(hsl[0] + 270, hsl[1], hsl[2]).hex();

  const protanomaly = blinder.protanomaly(hex);
  const deuteranomaly = blinder.deuteranomaly(hex);
  const tritanomaly = blinder.tritanomaly(hex);
  const protanopia = blinder.protanopia(hex);
  const deuteranopia = blinder.deuteranopia(hex);
  const tritanopia = blinder.tritanopia(hex);
  const achromatomaly = blinder.achromatomaly(hex);
  const achromatopsia = blinder.achromatopsia(hex);

  return <div style={{backgroundColor: `white`, width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', padding: '50px' }}>
      <TextField
        style={{width: '70%', height: '50px', textAlign: 'center', marginTop: '50px', maxWidth: '1150px'}}
        id="input-with-icon-textfield"
        label="Color Hex Value"
        variant="outlined"
        value={inputVal}
        onChange={updateInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <div style={{height: '20px', width: '20px', backgroundColor: `#${hex}`, borderRadius: '2px'}}></div>
            </InputAdornment>
          ),
        }}
      />
      
      <div style={{...card, backgroundColor: `#${hex}`, height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{textAlign: 'center', fontSize: '16px', marginBottom: '0px'}}>#{hex.toUpperCase()}</p>
        <h1 style={{textAlign: 'center', marginTop: '10px'}}>{name}</h1>
      </div>

      <div style={card}>
        <h3 style={{marginBottom: '10px', marginTop: '10px'}}>Conversion Tables</h3>
        <ValueTable hex={hex} />
      </div>
      
      <div style={card}>
        <h3 style={{marginBottom: '10px', marginTop: '10px'}}>Variations</h3>
        
        <Variation 
          name="Shades"
          details="A shade is created by increasing the darkness of the base color by adding black."
          palette={shades}
          baseColor={hexString}
        />
        <Variation 
          name="Tints"
          details="A tint is created by increasing the lightness of the base color by adding white."
          palette={tints}
        />
        <Variation 
          name="Tones"
          details="A tint is created by increasing the lightness of the base color by adding grey."
          palette={tones}
        />
        <Variation 
          name="Monochromatic Colors"
          details="A monochromatic palette is created by adding lightness and saturation the base color."
          palette={monochromes}
        />
      </div>

      <div style={card}>
        <h3 style={{marginBottom: '10px', marginTop: '10px'}}>Common Color Matchings</h3>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          <RelatedColors name={'Modern Complementary'} helperText={'The two colors that add to white when hex math is done (x + hex = #ffffff)'} colors={[hexString, complementary1]} shadeCount={5} />
          <RelatedColors name={'Traditional Complementary'} helperText={'Colors on the opposite side of the color wheel (rotate hue 180 deg around wheel)'}  colors={[hexString, complementaryHex2]} shadeCount={5} />
          <RelatedColors name={'Analogous Palette'} helperText={'Colors close to each other on the color wheel'}  colors={[ana1, hexString, ana2]} shadeCount={7} />
          <RelatedColors name={'Triadic Palette'} helperText={'Three colors each 120 degrees apart on the color wheel'}  colors={[triad1, hexString, triad2]} shadeCount={7} showPalette={true} />
          <RelatedColors name={'Tetradic Palette'} helperText={'Four colors 90 degrees apart on the color wheeel'}  colors={[tetrad1, hexString, tetrad2, tetrad3]} shadeCount={9} showPalette={true} />
        </div>
      </div>

      <div style={card}>
        <h3 style={{marginBottom: '10px', marginTop: '10px'}}>Color Blindness</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <Variation 
            name="Protanomaly"
            details="Low red."
            palette={[hexString, protanomaly]}
            fullWidth={'45%'}
          />
          <Variation 
            name="deuteranomaly"
            details="low green."
            palette={[hexString, deuteranomaly]}
            fullWidth={'45%'}
          />
          <Variation 
            name="Tritanomaly"
            details="Low blue."
            palette={[hexString, tritanomaly]}
            fullWidth={'45%'}
          />
          <Variation 
            name="Protanopia"
            details="no red."
            palette={[hexString, protanopia]}
            fullWidth={'45%'}
          />
          <Variation 
            name="Deuteranopia"
            details="no green."
            palette={[hexString, deuteranopia]}
            fullWidth={'45%'}
          />
          <Variation 
            name="Tritanopia"
            details="no blue."
            palette={[hexString, tritanopia]}
            fullWidth={'45%'}
          />
          <Variation 
            name="Achromatomaly"
            details="Almost no color."
            palette={[hexString, achromatomaly]}
            fullWidth={'45%'}
          />
          <Variation 
            name="Achromatopsia"
            details="no color."
            palette={[hexString, achromatopsia]}
            fullWidth={'45%'}
          />
        </div>
      </div>
  </div>
}

export default ColorHomepage;