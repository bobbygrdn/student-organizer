let randomizer = {

    randomize: function(listOfStudents) {
        let copy = [...listOfStudents];
        let result = []

        while(copy.length !== 0) {
            if(copy.length === 3) {
                let p1 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()
                let p2 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()
                let p3 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()
                let newObj = {
                    P1: p1,
                    P2: p2,
                    P3: p3
                }
                result.push(newObj)
            } else {
                let p1 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()
                let p2 = copy.splice(Math.floor(Math.random() * copy.length), 1).toString()
                let newObj = {
                    P1: p1,
                    P2: p2
                }

                result.push(newObj)
            }

        }
        return result;
    }

}

module.exports = randomizer;