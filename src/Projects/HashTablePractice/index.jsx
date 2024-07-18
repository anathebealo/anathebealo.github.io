import React, { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const randomPrimes = [3, 5, 7, 11, 13, 17, 19];
const PROBE_TYPES = { LINEAR: 'linear', QUADRATIC: 'quadratic', DOUBLEHASH: 'doubleHash', CHAINING: 'chaining' };

const HashTablePractice = () => {
  const tableSize = 23;

  const [collisionProbing, setCollisionProbing] = useState(false);
  const [probingType, setprobingType] = useState(PROBE_TYPES.CHAINING);
  const [numberToInsert, setNumberToInsert] = useState(Math.floor(Math.random()*100) + 23);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [hashTable, setHashTable] = useState([]);

  const [linearProbeIncrement, setLinearProbeIncrement] = useState(3);
  const [doubleHashPrime, setDoubleHashPrime] = useState(13);

  const newHashFunction = () => {
    setDoubleHashPrime(randomPrimes.filter(x => x !== doubleHashPrime)[Math.floor(Math.random() * (randomPrimes.length - 1))]);
    setLinearProbeIncrement(randomPrimes.filter(x => x !== linearProbeIncrement)[Math.floor(Math.random() * (randomPrimes.length - 1))]);
    setPracticeStarted(true);
    // setHashTable(Array(tableSize).fill(null));
    setHashTable([null, 1,2,3,4,5, null, 679, null])
  }

  const switchInsertionMethod = (event) => {
    const isProbing = event.target.checked;
    setCollisionProbing(isProbing);
    if(!isProbing) {
      setprobingType(PROBE_TYPES.CHAINING);
    }
  }

  const changeProbeType = (event) => {
    setprobingType(event.target.value);
    setPracticeStarted(false);
  }

  const newInsertionNumber = () => {
    setNumberToInsert(Math.floor(Math.random()*100) + 28);
  }

  return <div style={{ padding: '2em' }}>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div><span>Insert with Probing</span><Switch onChange={switchInsertionMethod} /></div>
      {collisionProbing && <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type of Hash Collision Resolution</FormLabel>
        <RadioGroup
          aria-labelledby="radio-buttons-group-label"
          defaultValue="Linear Probing"
          name="radio-buttons-group"
          value={probingType}
          onChange={changeProbeType}
        >
          <FormControlLabel value={PROBE_TYPES.LINEAR} control={<Radio />} label="Linear Probing" />
          <FormControlLabel value={PROBE_TYPES.QUADRATIC} control={<Radio />} label="Quadratic Probing" />
          <FormControlLabel value={PROBE_TYPES.DOUBLEHASH} control={<Radio />} label="Double Hashing" />
        </RadioGroup>
      </FormControl>}
    </div>

    {!practiceStarted 
      ? <Button style={{  }} variant="contained" onClick={newHashFunction}>Start Practicing</Button>
      : <Button style={{  }} variant="contained" onClick={newHashFunction}>Restart</Button>
    }

    {practiceStarted && <Fragment>
    <div>
      {probingType === PROBE_TYPES.LINEAR 
        ? <div>
          <p>Insert into the hash table using linear probing</p>
          <p>For each collision, change the insertion index to <strong>((i + {linearProbeIncrement}) mod tableSize</strong></p>
        </div>
        : probingType === PROBE_TYPES.QUADRATIC
          ? <div>
          <p>Insert into the hash table using quadratic probing</p>
          <p>For each collision, change the insertion index to <strong>(H({numberToInsert}) + k²)</strong> where H({numberToInsert}) is the hash function output and k is the attemnpt at insertion</p>
        </div>
          : probingType === PROBE_TYPES.DOUBLEHASH 
            ? <div>
          <p>Insert into the hash table using double hashing</p>
          <p>For each collision, change the insertion index to <strong>{doubleHashPrime} - ({numberToInsert} mod {doubleHashPrime})</strong></p>
            </div>
            : probingType === PROBE_TYPES.CHAINING
              ? <div>
          <p>Insert into the hash table using separate chaining</p>
              </div>
              : null 
      }
      <p>Insert <strong>{numberToInsert}</strong> into the hash table below.</p>
      </div>
      
      {collisionProbing && practiceStarted
        ? <div style={{ display: 'flex', flexDirection: 'row', gap: '.5em' }}>
          { hashTable.map((x, i) => <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <div style={{ width: '50px', height: '50px', backgroundColor: hashTable[i] !== null ? '#5dc85d' : 'white', borderRadius: '10px', cursor: 'pointer', border: '2px solid black' }}>
              {hashTable[i] !== null && <p style={{ marginTop: '12px', fontSize: '20px'}}>{hashTable[i]}</p> }
            </div>
            <span>{i}</span>
          </div> )}
        </div> 
        : <div>

        </div>
      }
      </Fragment>
    }
  </div>
}

export default HashTablePractice;