import { useState } from 'react';
import GreedyGame from './GreedyGame';
import HashTablePractice from './HashTablePractice';
import FoodTracking from './FoodTracking';

const GREEDY_GAME = "GREEDY";
const HASH_TABLE_PRACTICE = "HASH";
const PHOEBE_FOOD = "PHOEBE";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(undefined);

  const getProject = () => {
    switch(selectedProject) {
      case GREEDY_GAME: 
        return <GreedyGame />
      case HASH_TABLE_PRACTICE: 
        return <HashTablePractice />
      case PHOEBE_FOOD: 
        return <FoodTracking />
      default: 
        return null;
    }  
  }

  return <div 
    className={`projects-container projects-link`} >
    <h1>Small Projects</h1>
    <div style={{ display: 'flex' }}>
      <button onClick={() => setSelectedProject(GREEDY_GAME)}>Greedy Game</button>
      <button onClick={() => setSelectedProject(HASH_TABLE_PRACTICE)}>Hash Table Practice</button>
      <button onClick={() => setSelectedProject(PHOEBE_FOOD)}>Phoebe Food Tracking</button>
    </div>
    
    <div>
      {getProject()}
    </div>
  </div>
}
  
export default Projects;
  