const fs = require('fs');
const path = require('path');

/* Objective: To extract verses.3 verses.4 and verses.12 from dataset_english.json 
and put it in ch_3,4,12English.json
Understanding the problem: 
there is a json object within dataset_english.json file, 
in there there is a property of verses which has chapter numbers as values(1-18), 
we want to access 3,4,12 of those values on the verses property and put it in an array 
then put that array in a json file

pseudocode: 
bring file in the script
read the file
convert it to a js object 
assign variable to 'read the needed values' 
write that variable to the new json file
*/
//chapters to be extracted
const chsToBeExtracted = [3,4,12];

//path to the input JSON file
const inputFilePath = path.join(__dirname, 'dataset_english.json');

//path to output json file
const outputFilePath = path.json(__dirname, 'ch_3,4,12English.json');

const extractedVerses = () => {
/* step 1 read file
   step 2 parse the json data to js object
   step 3 extract the required verses
   step 4 create an object to hold the extracted verses
   step 5 write the extracted verses to the output json file
*/
/*  Step 1
    the fs.readFile() method is a method used to read a file 
    that takes in 3 arguments, 
    1. the file path 2. the encodin and 3. A callback function
    the callback function takes two parameters
    err and data, if while reading the file any error is raised
    the err contains that, if not the variable data
    contains the data 
*/
fs.readFile(inputFilePath, 'utf-8', (err, data) => {
  if(err) {
    console.error('Error reading the file:', err);
    return; 
  }
  
})
// step 2 parse the json data


// step 3 extract the required verses



}

