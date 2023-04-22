const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)


// think of the comma as indexes
const animals = ["dog", "cat", "bird", "lizard", "hamsters"]
const [ , , , petAnimals, petsAreGreat] = animals

// copies the array
const [ ... loveAnimals ] = animals

console.log(petAnimals, petsAreGreat)
console.log(loveAnimals)




function loveDogs() {
    console.log("I love my dog!")
    //return "I REALLY love Addison"
}

console.log(loveDogs())

