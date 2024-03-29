import { useState } from 'react';
require('./about.css');

const ME = 'me';
const CHRIS = 'chris';
const PHOEBE = 'phoebe';
const BIT = 'bit';
const NIBS = 'nibs';

function About() {
  const [image, setImage] = useState(ME);

  const meImg = <img src={require("../images/me.jpg")} alt="person smiling"></img>;
  const chrisImg = <img src={require("../images/chris.jpg")} alt="person smiling"></img>;
  const phoebeImg = <img src={require("../images/phoebe.jpg")} alt="person smiling"></img>;
  const bitImg = <img src={require("../images/bit.jpg")} alt="orange cat with boa"></img>;
  const nibsImg = <img src={require("../images/nibs.jpg")} alt="grey cat on counter"></img>;

  return <div className={`resume-container resume-link`} >
    <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
      <div style={{ width: '50%'}}>
        <h1 style={{ cursor: 'pointer'}} onClick={() => setImage(ME)}>Hi, I'm Ana!</h1>
        <h3>Personal</h3>
        <p> I studied computer science and mathematics in college which I now use in my job as a software engineer.
          At home I have <span style={{ cursor: 'pointer'}} onClick={() => setImage(CHRIS)}>one husband (Chris)</span>, <span style={{ cursor: 'pointer'}} onClick={() => setImage(PHOEBE)}>one daughter (Phoebe)</span> and two cats (<span style={{ cursor: 'pointer'}} onClick={() => setImage(NIBS)}>Nibble</span> and <span style={{ cursor: 'pointer'}} onClick={() => setImage(BIT)}>Bit</span>).
          When I'm not working or taking care of my daughter, you can find me gardening, <a href="/#/travel">
            traveling </a>, hiking, cooking or playing board games.
        </p>
        <h3>Professional</h3>
        <p>All the important stuff is here: <a href={require('../docs/abealo_9-26-2020_resume.pdf')} target="_blank" rel="noreferrer">
          View Resume
        </a>
        </p>
      </div>
      <div className="crop">
        {image === ME ? meImg : image === CHRIS ? chrisImg : image === PHOEBE ? phoebeImg : image === BIT ? bitImg : nibsImg}
      </div>
    </div>
  </div>
}

export default About;
