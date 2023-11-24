const fs = require('fs');

// Data File Path
const file = 'C:/Users/SaishNaik/Downloads/alumnidataexport.json';

// Read JSON file
const fileData = fs.readFileSync(file, 'utf8');
const data = JSON.parse(fileData);

const keyNames = ['A_Occupation'];
const valueCounts = {};

data.forEach(item => {
    keyNames.forEach(key => {
        const value = item[key];
        try {
            if (value in valueCounts) {
                valueCounts[value]++;
            } else {
                valueCounts[value] = 1;
            }
        } catch (error) {
            console.error(error);
        }
    });
});

console.log(valueCounts);
