import { useEffect, useState, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import chroma from 'chroma-js';
import names from '../../data/paletteData/colorNames';
import palettes from '../../data/paletteData/palettes';
import blinder from 'color-blind';
import LeftArrow from '../paletteGrid/detailIcons/leftArrow';
import FoldUp from '../paletteGrid/detailIcons/foldUp';
import FoldDown from '../paletteGrid/detailIcons/foldDown';
import CopyIcon from '../paletteGrid/detailIcons/copyIcon';
import './paletteDetails.css';

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

const organizeByLightness = (hsls) => {
  hsls.sort(function(x, y) {
    if (x[2] < y[2]) {
      return -1;
    }
    if (x[2] > y[2]) {
      return 1;
    }
    return 0;
  });
  return hsls;
}

const PaletteDetailPage = () => {
  let navigate = useNavigate(); 

  const { id } = useParams();
  const [palette, setPalette] = useState();

  const [showOriginalPalette, setShowOriginalPalette] = useState(true);
  const [transformedPalette, setTransformedPalette] = useState(undefined);
  const [bezier, setBezier] = useState(false);
  const [bezDisabled, setBezDisabled] = useState(false);
  const [lightCorrect, setLightCorrect] = useState(false);
  const [deut, setDeut] = useState(false);

  useEffect(() => {
    if(palette === undefined) {
      const tempPalette = palettes[id];
      let hslColors = organizeByLightness(tempPalette.colors.map(color => chroma(color.hex).hsl()));
      let colors = hslColors.map(hsl => {
        let col = chroma.hsl(hsl[0], hsl[1], hsl[2]).hex();
        return {
          hex: col,
          colorName: findClosestColorName(col)
        }
      });
      const toSetPalette = {id, colors};
      setPalette(toSetPalette);
    }
  }, [id, palette]);

  useEffect(() => {
    if(palette !== undefined) {
      let transformed = false;
      let colors = palette.colors.map(x => x.hex);
      if(bezier) {
        try {
          colors = chroma.bezier(colors).scale().colors(colors.length < 10 ? 10 : 12);
          transformed = true;
        } catch {
          setBezDisabled(true);
        }
      }

      if(lightCorrect) {
        colors = chroma.scale(colors).correctLightness().colors(colors.length);
        transformed = true;
      }

      // convert colors to color blind safe
      if(deut) {
        colors = colors.map(hex => blinder.deuteranopia(hex));
        transformed = true;
      }

      colors = colors.map(x => { return { hex: x, colorName: findClosestColorName(x) }});
      if(transformed) { 
        setTransformedPalette({id: palette.id, colors});
      } else {
        setTransformedPalette(undefined);
        setShowOriginalPalette(true);
      }
    }
  }, [bezier, lightCorrect, setTransformedPalette, deut, palette]);
  
  const copy = (color) => {
    navigator.clipboard.writeText(color);
  }

  return <div className="palettePage">
    <Fragment>
        <div className={`paletteContainer ${transformedPalette && showOriginalPalette ? 'halfHeight' : transformedPalette ? 'hidden' : 'fullHeight'}`}>
          {palette !== undefined && palette.colors.map(color => (
            <div key={`color-${color.hex}`} className="colorPanel" style={{backgroundColor: color.hex}}>
              <div className="colorPanelHexColor" style={{color: chroma(color.hex).hsl()[2] > .6 ? 'black' : 'white'}}>
                <div style={{ display: 'flex'}}>
                  {color.hex.toString().toUpperCase().replace('#', '')}
                  <div 
                    style={{ width: '12px', height: '12px', marginLeft: '10px', cursor: 'pointer', marginTop: '-2px'}} 
                    onClick={() => copy(color.hex.toString())}>
                      <CopyIcon />
                  </div>
                </div>
              </div>
              <div className="colorPanelColorName" style={{color: chroma(color.hex).hsl()[2] > .6 ? 'black' : 'white'}}>
                {color.colorName}
              </div>
            </div>
          ))}
        </div>
        {transformedPalette && showOriginalPalette
          ? <button  className="foldButton" onClick={ () => setShowOriginalPalette(false) }>
              <div className="foldIcon"><FoldUp /></div>
            </button> 
          : transformedPalette && !showOriginalPalette 
            ? <button className="foldButton" onClick={ () => setShowOriginalPalette(true) }>
                <div className="foldIcon"><FoldDown /></div>
              </button>
            : null }
      </Fragment> 
     
      <div style={{position: 'absolute'}}> 
        <div style={{ display: 'flex', flexDirection: 'column', height: '100px'}}>
          <button style={{backgroundColor: 'transparent', border: 'none', padding:'0px', cursor: 'pointer', fontSize: '16px', width: '25px', margin: '0px', marginLeft: '5px'}} onClick={() => navigate(`/colors`)}>
            <LeftArrow />
          </button>
          <div style={{backgroundColor: 'rgb(255 255 255 / 25%)', padding: '20px', borderRadius: '5px'}}>
            <p key={'pbezier'} style={{ margin: '0px', fontSize: '14px' }}>
              <input
                disabled={bezDisabled}
                name="bezier"
                type="checkbox"
                checked={bezier && !bezDisabled}
                onChange={() => setBezier(!bezier)}
              /> {!bezDisabled ? 'bezier transform' : 'bezier disabled for this palette'} </p>
            <p key={'plightcorrect'} style={{margin: '0px', fontSize: '14px'}}>
              <input
                name="light correct"
                type="checkbox"
                checked={lightCorrect}
                onChange={() => setLightCorrect(!lightCorrect)}
              /> light correct </p>
            <p key={'pcolorblind'} style={{margin: '0px', fontSize: '14px'}}><input
              name="colorblind-deut"
              type="checkbox"
              checked={deut}
              onChange={() => setDeut(!deut)}
            />View as color blind? </p>
          </div>
        </div>
      </div>

    { transformedPalette ? <div style={{display: 'flex', flexDirection: 'row', height: showOriginalPalette ? '50%' : '100%', overflowY: 'hidden', transition: '.5s'}}>
      {transformedPalette.colors.map(color => (
        <div key={`color-${color.hex}`} style={{backgroundColor: color.hex, height: '100%', width: `${100/transformedPalette.colors.length}%`, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
          <div style={{marginBottom: '10px', textAlign: 'center', fontSize: '24px', color: chroma(color.hex).hsl()[2] > .6 ? 'black' : 'white'}}>
            <div style={{ display: 'flex'}}>
              {color.hex.toString().toUpperCase().replace('#', '')}
              <div 
                style={{ width: '12px', height: '12px', marginLeft: '10px', cursor: 'pointer', marginTop: '-2px'}} 
                onClick={() => copy(color.hex.toString())}>
                  <CopyIcon />
              </div>
            </div>
          </div>
          <div style={{marginBottom: '30px', textAlign: 'center', fontSize: '16px', color: chroma(color.hex).hsl()[2] > .6 ? 'black' : 'white'}}>
            {color.colorName}
          </div>
        </div>
      ))}  
    </div> : null}
  </div>
}

export default PaletteDetailPage;