import { useState } from 'react';
import CopyIcon from '../paletteGrid/detailIcons/copyIcon';
import './colorSquare.css';
import chroma from 'chroma-js';

const ColorSquare = ({key, widthPercent, color}) => {
  const colorString = color.toString().toUpperCase().replace('#', '');
  const [copied, setCopied] = useState(false);
  const [textColor, setTextColor] = useState(color);
  const [isHovering, setIsHovering] = useState(false);

  const copy = (color) => {
    setCopied(true);
    navigator.clipboard.writeText(color);
  }

  const exit = () => {
    setCopied(false);
    setTextColor(color);
    setIsHovering(false);
  }

  const onHover = () => {
    setIsHovering(true);
    setTextColor(chroma(color).hsl()[2] > .6 ? 'black' : 'white');
  }

  return <div
    onClick={() => copy(color)}
    onMouseLeave={exit}
    onMouseEnter={onHover}
    key={key} 
    style={{ 
      width: `${widthPercent}%`, 
      backgroundColor: color, 
      display:'flex', 
      flexDirection:'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      cursor: isHovering ? 'pointer' : 'none'
    }}
  >
    <div className="copyIcon" style={{ color: textColor}} ><CopyIcon></CopyIcon></div>
    <p style={{color: textColor, fontSize:'12px', textAlign: 'center'}}><strong>{!copied ? colorString : 'Copied'}</strong></p>
  </div>
}

export default ColorSquare;