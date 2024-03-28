import { useEffect, useState } from 'react';
// slightly different for unique colors
const whites = ['#fffff1', '#fffff2', '#fffff3', '#fffff4', '#fffff5', '#fffff6', '#fffff7', '#fffff8'];

function LightBox({ colors }) {
    const allColors = colors.concat(whites);
    // save the index so when colors change the style of each box also changes immediately
    const [colorIndex, setColorIndex] = useState(-1);

    const transitionTime = Math.floor(Math.random() * 5) + 2;
    const opacity = Math.floor(Math.random() * 30);
    
    useEffect(() => {
      const foo = () => {
        let newColorIndex = Math.floor(Math.random() * 14);
        while(newColorIndex === colorIndex ) {
          newColorIndex = Math.floor(Math.random() * 14);
        }
        const timerDuration = 1000 * Math.floor(Math.random() * 9);
        let timer = setTimeout(() => {
          setColorIndex(newColorIndex);
        }, timerDuration);
    
        return () => {
            clearTimeout(timer);
        };
      }
      // 50% chance of initial color change happening immediately
      if(colorIndex === -1 && Math.floor(Math.random()*2)%2 === 0) {
        let initialTimer = setTimeout(() => foo(), 5000);
        clearTimeout(initialTimer);
      } else {
        foo();
      }
    }, [colorIndex]);

    return <div 
      className={`light-box`}
      style={{ 
        backgroundColor: allColors[colorIndex], 
        opacity: `${opacity}%`,
        transition: `background-color ${transitionTime}s, opacity ${transitionTime}s` }}>
    </div>
  }
  
  export default LightBox;
  