import './headerBar.css';
import HeaderButton from './HeaderButton';

function HeaderBar({ colors }) {
    return <div className="headerBar">
        <HeaderButton to="/" hoverColor={'#ffffff'} name="Home" />
        <HeaderButton to="/colors" hoverColor={colors[0]} name="Colors" />
        <HeaderButton to="/recipes" hoverColor={colors[1]} name="Recipes" />
        <HeaderButton to="/projects" hoverColor={colors[2]} name="Projects" />
        <HeaderButton to="/photos" hoverColor={colors[3]} name="Photos" />
        <HeaderButton to="/about" hoverColor={colors[4]} name="About" />
        
    </div>
}

export default HeaderBar;
