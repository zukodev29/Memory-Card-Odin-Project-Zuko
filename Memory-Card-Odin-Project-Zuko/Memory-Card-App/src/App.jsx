import {useState} from 'react';
import Game from './components/Game.jsx'
import Scorecard from './components/Scorecard.jsx'
import "./App.css";

import manstein from "./assets/manstein.png";
import guderian from "./assets/guderian.png";
import kesselring from "./assets/kesselring.png";
import rommel from "./assets/rommel.png";
import slim from "./assets/slim.png";
import montgomery from "./assets/montgomery.png";
import auchinleck from "./assets/auchinleck.png";
import percival from "./assets/percival.png";
import bradley from "./assets/bradley.png";
import eisenhower from "./assets/eisenhower.png";
import patton from "./assets/patton.png";
import nimitz from "./assets/nimitz.png";
import chuikov from "./assets/chuikov.png";
import zhukov from "./assets/zhukov.png";
import rokossovesky from "./assets/rokossovesky.png";
import vatutin from "./assets/vatutin.png";

//Importing photos from folder assets

const GENERALS = [
  // Germans
  {
    id: "manstein",
    name: "Erich von Manstein",
    nation: "germany",
    image: manstein,
  },
  {
    id: "guderian",
    name: "Heinz Guderian",
    nation: "germany",
    image: guderian,
  },
  {
    id: "rommel",
    name: "Erwin Rommel",
    nation: "germany",
    image: rommel,
  },
  {
    id: "kesselring",
    name: "Albert Kesselring",
    nation: "germany",
    image: kesselring,
  },
  // Brits
  {
    id: "slim",
    name: "William Slim",
    nation: "britain",
    image: slim,
  },
  {
    id: "auchinleck",
    name: "Claude Auchinleck",
    nation: "britain",
    image: auchinleck,
  },
  {
    id: "montgomery",
    name: "Bernard Montgomery",
    nation: "britain",
    image: montgomery,
  },
  {
    id: "percival",
    name: "Arthur Percival",
    nation: "britain",
    image: percival,
  },
  // Americans
  {
    id: "patton",
    name: "George Patton",
    nation: "usa",
    image: patton,
  },
  {
    id: "eisenhower",
    name: "Dwight D. Eisenhower",
    nation: "usa",
    image: eisenhower,
  },
  {
    id: "bradley",
    name: "Omar Bradley",
    nation: "usa",
    image: bradley,
  },
  {
    id: "nimitz",
    name: "Chester W. Nimitz",
    nation: "usa",
    image: nimitz,
  },
  // Soviets
  {
    id: "zhukov",
    name: "Georgy Zhukov",
    nation: "soviet",
    image: zhukov,
  },
  {
    id: "chuikov",
    name: "Vasily Chuikov",
    nation: "soviet",
    image: chuikov,
  },
  {
    id: "vatutin",
    name: "Nikolai Vatutin",
    nation: "soviet",
    image: vatutin,
  },
  {
    id: "rokossovsky",
    name: "Konstantin Rokossovsky",
    nation: "soviet",
    image: rokossovesky,
  },
];
/*This one const have all generals that are going to be displayed
with id, name, nation and image name*/

const shuffleArray = (array) => {
  const shuffled = [...array];
  for(let i = shuffled.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] =  [shuffled[j], shuffled[i]]
  }
  return shuffled
}

//It randomly reorders the elements of an array
//It uses [...array] to avoid mutating the original array


function App() {
  const [best, setBest] = useState(0);
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState([]);
  
  // Initialize once with a function to prevent shuffling on every render
  const [cards, setCards] = useState(() => shuffleArray(GENERALS));

  const onChange = (id) => {
    if (chosen.includes(id)) {
      // Game Over: Reset current, leave best alone
      setCurrent(0);
      setChosen([]);
    } else {
      // Correct Guess: Calculate the next score safely
      const nextScore = current + 1;
      setCurrent(nextScore);
      
      if (nextScore > best) {
        setBest(nextScore);
      }
      
      setChosen([...chosen, id]);
    }

    // Always shuffle using a functional state update to ensure fresh data
    setCards((prevCards) => shuffleArray(prevCards));
  };

  return (
    <div>
      <Scorecard bestScore={best} currScore={current} />
      <Game CARDS={cards} onChange={onChange} />
    </div>
  );
}

//Logic behind memory game


export default App;