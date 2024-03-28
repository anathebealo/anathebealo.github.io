import chroma from 'chroma-js';
import './tableCss.css';
import CopyIcon from '../paletteGrid/detailIcons/copyIcon';

const rgbToHwb = (rgb) => {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = chroma(r, g, b).hsl()[0];

	const w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [h, w * 100, b * 100];
};

const rgbToXyz = (rgb) => {
	let r = rgb[0] / 255;
	let g = rgb[1] / 255;
	let b = rgb[2] / 255;

	// Assume sRGB
	r = r > 0.04045 ? (((r + 0.055) / 1.055) ** 2.4) : (r / 12.92);
	g = g > 0.04045 ? (((g + 0.055) / 1.055) ** 2.4) : (g / 12.92);
	b = b > 0.04045 ? (((b + 0.055) / 1.055) ** 2.4) : (b / 12.92);

	const x = (r * 0.4124564) + (g * 0.3575761) + (b * 0.1804375);
	const y = (r * 0.2126729) + (g * 0.7151522) + (b * 0.072175);
	const z = (r * 0.0193339) + (g * 0.119192) + (b * 0.9503041);

	return [x * 100, y * 100, z * 100];
};

const ValueTable = ({ hex }) => {
  const rgb = chroma(hex).rgb();
  const rgba = chroma(hex).rgba();
  const hsl = chroma(hex).hsl().map(x => Math.round(x * 100) / 100);
  const hsv = chroma(hex).hsv().map(x => Math.round(x * 100) / 100);
  const lch = chroma(hex).lch().map(x => Math.round(x * 100) / 100);
  const cmyk = chroma(hex).cmyk().map(x => Math.round(x * 100) / 100);
  const hwb = rgbToHwb(rgb).map(x => Math.round(x * 100) / 100);
  const xyz = rgbToXyz(rgb).map(x => Math.round(x * 100) / 100);
  const lab = chroma(hex).lab().map(x => Math.round(x * 100) / 100);
  
  function createData(name, A) {
    return { name, A };
  }

  const rows = [
    createData('HEX', `#${hex.toString().toUpperCase()}`),
    createData('RGB', `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`),
    createData('RGBA',  `${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]}`),
    createData('HSL',  `${hsl[0]}, ${hsl[1]}, ${hsl[2]}`),
    createData('HSV',  `${hsv[0]}, ${hsv[1]}, ${hsv[2]}`),
  ];

  const rows2 = [
    createData('LAB', `${lab[0]}, ${lab[1]}, ${lab[2]}`),
    createData('LCH',  `${lch[0]}, ${lch[1]}, ${lch[2]}`),
    createData('CMYK',  `${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${cmyk[3]}`),
    createData('XYZ',  `${xyz[0]}, ${xyz[1]}, ${xyz[2]}`),
    createData('HWB',  `${hwb[0]}, ${hwb[1]}, ${hwb[2]}`),
  ];

  const copy = (color) => {
    navigator.clipboard.writeText(color);
  }

  return <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
    <table className="colorTable" aria-label="simple table">
        {rows.map((row) => (
          <tr key={row.name}>
            <th style={{textAlign: 'left'}}>
              {row.name}
            </th>
            <th>
              <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                {row.A} 
                <div 
                  style={{ width: '12px', height: '12px', marginLeft: '10px', cursor: 'pointer'}} 
                  onClick={() => copy(row.A)}>
                    <CopyIcon />
                </div>
              </div>
            </th>
          </tr>
        ))}
    </table>

    <table className="colorTable" aria-label="simple table">
        {rows2.map((row) => (
          <tr key={row.name}>
            <th style={{textAlign: 'left'}}>
              {row.name}
            </th>
            <th>
              <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                {row.A} 
                <div 
                  style={{ width: '12px', height: '12px', marginLeft: '10px', cursor: 'pointer'}} 
                  onClick={() => copy(row.A)}>
                    <CopyIcon />
                </div>
              </div>
            </th>
          </tr>
        ))}
    </table>
  </div> 
}

export default ValueTable;