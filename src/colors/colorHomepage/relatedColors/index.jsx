import { useEffect, useState } from 'react';
import chroma from 'chroma-js';
import blinder from 'color-blind';
import ColorSquare from '../colorSquare';

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

const RelatedColors = ({name, colors, shadeCount, showPalette=true, helperText}) => {
  const [bezier, setBezier] = useState(false);
  const [lightCorrect, setLightCorrect] = useState(false);
  const [deut, setDeut] = useState(false);
  const [scale, setScale] = useState([]);

  useEffect(() => {
    let hslColors = organizeByLightness(colors.map(color => chroma(color).hsl()));
    let organizedColors = hslColors.map(hsl => chroma.hsl(hsl[0], hsl[1], hsl[2]));

    let scale;
    if(bezier) {
      scale = chroma.bezier(organizedColors).scale().colors(shadeCount);
    } else {
      scale = chroma.scale(organizedColors).colors(shadeCount);
    }

    if(lightCorrect) {
      scale = chroma.scale(scale).correctLightness().colors(shadeCount);
      console.log(scale);
    }

    scale = deut ? scale.map(hex => blinder.deuteranopia(hex)) : scale;

    setScale(scale);
  }, [bezier, lightCorrect, setScale, shadeCount, deut, colors]);

  return <div style={{ width: '100%' }}>
    <h5 style={{marginBottom: '10px', marginTop: '10px' }}>{name}</h5>
    <p style={{color: '#4f4f4f'}}>{helperText}</p>

    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div style={{ margin: '20px', marginTop: '10px', height: '150px', display:'flex', flexDirection:'row', width: '45%', borderRadius: '10px', overflow:'hidden', border: '1px solid lightgray' }}>
          {colors.map((color) => <ColorSquare key={`monochrome-${color}`} widthPercent={100/colors.length} color={color} /> )}
      </div>

      { showPalette ? <div style={{ display: 'flex', flexDirection: 'column', width: '45%',}}>
        <div style={{  margin: '20px', marginTop: '10px', height: '150px', display:'flex', flexDirection:'row', width: '100%', borderRadius: '10px', overflow:'hidden', border: '1px solid lightgray'}}>
          {scale.map((color) => <ColorSquare key={`monochrome-${color}`} widthPercent={100/scale.length} color={color} /> )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '20px'}}>
          <p key={'pbezier'} style={{ margin: '0px', fontSize: '14px' }}>
            <input
              name="bezier"
              type="checkbox"
              checked={bezier}
              onChange={() => setBezier(!bezier)}
            /> bezier transform </p>
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
      </div> : null }
    </div>
  </div>
}

export default RelatedColors;