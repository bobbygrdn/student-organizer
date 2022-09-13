const { randomizer } = require('./randomizer')
const { useState } = require('react');
const Pair = require('./Pair')

function App() {

  const [listOfStudents, setListOfStudents] = useState(['Bob', 'Charles', 'Jeff', 'Mag', 'Rob', 'Michael', 'George'])
console.log(randomizer.randomize(listOfStudents))
  return (
        <div>
          {randomizer.randomize(listOfStudents).map((elem) => {
            return (
              <Pair elem={elem} />
             )
          })}
        </div>
  );
}

export default App;
