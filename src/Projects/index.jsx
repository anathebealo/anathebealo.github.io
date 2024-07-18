import { useState } from 'react';
import GreedyGame from './GreedyGame';
import HashTablePractice from './HashTablePractice';
import FoodTracking from './FoodTracking';
import Button from '@mui/material/Button';
import WikiGraph from './WikiGraph';

const WIKI = "WIKI";
const GREEDY_GAME = "GREEDY";
const HASH_TABLE_PRACTICE = "HASH";
const PHOEBE_FOOD = "PHOEBE";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(undefined);

  const getProject = () => {
    switch(selectedProject) {
      case WIKI: 
        return <WikiGraph />
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
    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
      <h1>Small Projects</h1>
      <Button onClick={() => setSelectedProject(WIKI)} variant="outlined">Wiki Explorer</Button>
      <Button onClick={() => setSelectedProject(GREEDY_GAME)} variant="outlined">Greedy Game</Button>
      <Button onClick={() => setSelectedProject(HASH_TABLE_PRACTICE)} variant="outlined">Hash Table Practice</Button>
      <Button onClick={() => setSelectedProject(PHOEBE_FOOD)} variant="outlined">Phoebe Food Tracking</Button>
    </div>
    
    <div>
      {getProject()}
    </div>
  </div>
}
  
export default Projects;
  