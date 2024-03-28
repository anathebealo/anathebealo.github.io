import Palette from './palette';

function PaletteGrid({palettes, filteredColor, pinColor}) {
  const colorDiv = palettes.map((palette) => {
    return <Palette key={`paletteGrid-${palette.id}`} palette={palette} filteredColor={filteredColor} pinColor={pinColor}/>
  });

  return <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', width: '80%', margin: 'auto'}}>{colorDiv} </div>
}

export default PaletteGrid;