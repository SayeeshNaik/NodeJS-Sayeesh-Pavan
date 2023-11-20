const fs = require('fs');
const XLSX = require('xlsx');
const workbook = XLSX.utils.book_new();

function fileCreation( fileName, fileExtension, data ) {
    // Specify the file path
    const filePath = fileName + '.' + fileExtension;
    
    if(fileExtension==='xlsx'){
        const XLSX = require('xlsx');
        const workbook = XLSX.utils.book_new();
        const data = [
        ['Name', 'Age', 'Country'],
        ['John Doe', 25, 'USA'],
        ['Jane Smith', 30, 'Canada'],
        ];

        const sheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

        // Write to a file
        XLSX.writeFile(workbook, `${fileName}.${fileExtension}`);

            
    } else {
        data = JSON.stringify(data)
        // Write to the file
        fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to the file: ${fileName}.${fileExtension}`, err);
            return;
        }
        console.log('File has been written successfully!');
        });
    }
    

}

module.exports = {
    fileCreation : fileCreation
}


