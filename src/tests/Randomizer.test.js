const randomizer = require('../components/randomizer')

describe('randomizer', () => {
    it('Should return a list of pair objects', () => {
        // Arrange
            /* Ideal result should look like the object below
            let result = [
                {P1: STUDENT NAME, P2: STUDENT NAME},
                {P1: STUDENT NAME, P2: STUDENT NAME}
            ]
            */
            let students = ['Bob', 'Charles', 'Jeff', 'Mag']
        // Act
            let result = randomizer.randomize(students);
        // Assert
            expect(Array.isArray(result)).toBe(true)
            expect(typeof result[0]).toBe("object")
            // length of the result
            expect(result.length).toBeGreaterThan(0)
            // result[0] = {P1: something, P2: something}
            expect(typeof result[0].P1 === 'string' && typeof result[0].P2 === 'string').toBe(true)
            // result[0].p1 is in listOfStudents array
            expect(students).toContain(result[0].P1)
    })
    it('Should return a list of objects where one object has three people', () => {
        // Arrange
            /* Ideal result should look like the object below
            let result = [
                {P1: STUDENT NAME, P2: STUDENT NAME},
                {P1: STUDENT NAME, P2: STUDENT NAME},
                {P1: STUDENT NAME, P2: STUDENT NAME, P3: STUDENT}
            ]
            */
           let students = ['Bob', 'Charles', 'Jeff', 'Mag', 'Rob', 'Michael', 'George']
        // Act
            let result = randomizer.randomize(students);
        // Assert
            // it that tests an odd number of array
                // result has one group that has 3 people
                expect((typeof result[0].P1 === 'string' && typeof result[0].P2 === 'string' && typeof result[0].P3 === 'string') || (typeof result[1].P1 === 'string' && typeof result[1].P2 === 'string' && typeof result[1].P3 === 'string') || (typeof result[2].P1 === 'string' && typeof result[2].P2 === 'string' && typeof result[2].P3 === 'string')).toBe(true)
    })

})