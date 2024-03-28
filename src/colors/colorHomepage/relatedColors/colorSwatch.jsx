const RelatedColor = ({hex, size}) => {
  return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{backgroundColor: `${hex}`, width: `${size}px`, height: `${size}px`}}></div>
    <p style={{fontSize: '12px', marginTop: '5px'}}>{hex}</p>
  </div>
}

export default RelatedColor;