import randomizer from './randomizer'
import Pair from './Pair'
const { useState } = require('react');

function App() {

  const [listOfStudents, setListOfStudents] = useState(['Bob', 'Charles', 'Jeff', 'Mag', 'Rob', 'Michael', 'George'])

  const random = randomizer.randomize(listOfStudents)

  return (
        <ul>
          {random.map((elem, index) => {       
            return (
              <Pair elem={elem} key={index} id={index} />
             )
          })}
        </ul>
  );
}

export default App;
