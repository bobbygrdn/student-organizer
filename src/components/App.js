import randomizer from './randomizer'
import Pair from './Pair'
const { useState } = require('react');

function App() {

  const [listOfStudents, setListOfStudents] = useState(['Adam Jones',
  'Dre Hurtado',
  'Anthony England',
  'Idris Yusuf',
  'Bolun Yang',
  'Brandon Adviento',
  'Chris Stevens',
  'Derek Tran',
  'Dylan Clark',
  'Edgar Garcia',
  'Elijah Stamp',
  'Ethan Charles',
  'Gerardo Reyes',
  'Glenn Banks',
  'Hali Usman-Isiaka',
  'Jakari Thomas',
  'Jeff Kearns',
  'Jeff Kelley',
  'Joe Low',
  'Joshua Richmond',
  'Katie Chevez',
  'Luis Guzman',
  'Marc Menard',
  'Nate Morrison',
  'Noah Gragg',
  'Rene Marquez',
  'Ryan Barnett',
  'Shelton Seaborn',
  'Steven Segerlund',
  'Tim Lott'])
  const [groupSize, setGroupSize] = useState(6)

  const random = randomizer.randomize(listOfStudents, groupSize)

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
