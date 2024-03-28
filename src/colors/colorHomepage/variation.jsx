import ColorSquare from './colorSquare';

const style = {
  margin: '20px',
  marginTop: '10px',
  height: '100px',
  display:'flex',
  flexDirection:'row',
  maxWidth: '1000px',
  borderRadius: '10px',
  overflow:'hidden',
  border: '1px solid lightgray'
}

const Variation = ({name, details, palette, baseColor, specificWidth, fullWidth="100%"}) => {
  return <div style={{ width: fullWidth}}>
    <h4 style={{marginBottom: '10px', marginTop: '10px'}}>{name}</h4>
    <p style={{color: '#4f4f4f'}}>{details}</p>
    <div style={{...style, width: specificWidth || ''}}>
      {palette.map((color) => <ColorSquare key={`monochrome-${color}`} widthPercent={100/palette.length} color={color} highlight={baseColor === color} /> )}
    </div>
  </div>
}

export default Variation;