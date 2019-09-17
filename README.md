# ChooseRandom Assignment

Students are to implement the ```chooseRandom``` function from the skeleton provided in ```lib.js```. This function takes an ```array``` and the number of random items to choose from the array (```numItems```). It should return a new array containing the correct number of randomly selected, unique items from the original array. Students must export their ```createRandom``` function from the lib.js file in order to run the included test cases.

## Goal

---
Have students practice a more complex problem in JavaScript which will allow them to explore more features of the language than some of the fundamental code wars problems offer.

## Tasks

- [ ] Implement ```chooseRandom``` function
- [ ] Should take 2 parameters, ```array``` and ```number```
- [ ] ```array``` should default to an empty array
- [ ] If ```array``` has length 0 or 1, then simply return it
- [ ] ```numItems``` must be checked to ensure it is a in the range 1 to array.length (inclusive)
- [ ] If ```numItems``` is outside of the correct range, then it should be set to a random number within the correct range
- [ ] complete the skeleton for the ```randomIndices``` array
- [ ] ```randomIndices``` should be an array of length ```numItems``` and contain unique numbers between 0 and array.length-1 which represent the indices of ```array```
- [ ] Filter ```array``` returning a new array containing only values which correlate to the indices included in ```randomIndices```
- [ ] Should always return an array
- [ ] Should not mutate the array passed in
- [ ] Should return a random array if possible (size > 1)
- [ ] Should return an array of the passed in length
- [ ] Run command ```npm run test``` and ensure all tests pass successfully
