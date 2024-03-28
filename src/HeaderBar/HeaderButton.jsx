import { useState } from "react";
import AnimatedLink from "../AnimatedLink";
import './headerBar.css';
import chroma from 'chroma-js';

function HeaderButton({ hoverColor, to, name }) {
    const [isHover, setIsHover] = useState(false);
    const hoverTextColor = chroma(hoverColor).hsl()[2] > .6 ? 'black' : 'white';

    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AnimatedLink to={to}>
            <div className='headerLink' 
                style={{ 
                    backgroundColor: isHover ? hoverColor : 'white', 
                    color: isHover ? hoverTextColor : 'black' }}>
                {name}
            </div>
        </AnimatedLink>
    </div>
}

export default HeaderButton;
