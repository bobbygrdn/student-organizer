let randomizer = {

    randomize: function(studentsArray, groupSize) {
        let copy = [...studentsArray];
        let result = []
        let newSize = groupSize+1

        while(copy.length !== 0) {
            if(copy.length < groupSize) {
                for(let i = 0; i <= copy.length+1; i++) {
                    if(i === result.length) {
                        i = 0;
                        newSize++
                    }
                    let elem = copy.splice(Math.floor(Math.random() * copy.length), 1).toString();
                    if(elem !== '') {
                        result[i][`P${newSize}`] = elem
                    }
                }
            } else {
                let newObj = {};
                for(let i = 1; i <= groupSize; i++) {
                    let elem = copy.splice(Math.floor(Math.random() * copy.length), 1).toString();
                    newObj[`P${i}`] = elem
                }
                result.push(newObj)
            }
        }
        return result;
    }

}

module.exports = randomizer;