require('./about.css');

function About() {
    return <div 
      className={`resume-container resume-link`} >
      <h1>Hi, I'm Ana!</h1>

      <h3>Personal</h3>
      <p> I studied computer science and mathematics in college which I now use in my job as a software engineer. 
        At home I have one husband (Chris), one daughter (Phoebe) and two cats (Nibble and Bit). 
        When I'm not working or taking care of my daughter, you can find me gardening, <a href="/#/travel">
        traveling </a>, hiking, cooking or playing board games.
      </p>
      <h3>Professional</h3>
      <p>All the important stuff is here: <a href={require('../docs/abealo_9-26-2020_resume.pdf')} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </p>
      <p>Summary:</p>
      <ul>
        <li>College: Graduated from the University of Rochester in 2015 with a B.A in matehmatics and a B.S. in Computer Science</li>
        <li>First job: Factset Inc. A fin tech company headquartered in Norwalk CT. I worked in C++ writing monte carlo simulation algorithms to help predict portfolio outcomes</li>
        <li>Latest Job: Cimpress. A parent company to custom printing businesses around the world (like Vistaprint). I wear many hats - team lead, engineering manager, and software engineer. Less frequently: UX designer and product manager</li>
      </ul>
    </div>
  }
  
  export default About;
  