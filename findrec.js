const fs = require('fs');
const path = require('path');

// Function: findInDir
// Parameters: dir = Directory to be searched
//             fileList = empty list
// Returns: list of all endpoints in a file structure (files and their absolute path)
//
function findInDir (dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath= path.join(dir, file);
        const fileStat = fs.lstatSync(filePath);

        if (fileStat.isDirectory()) {
            findInDir(filePath, fileList);
        }
        else {
            //Pushing to a list for the return, probably does not need to happen...
            fileList.push(filePath);
            //...Because we are writing directly to a file as well
            // My first attempt needed a separate list
            // This could be cleaned up so the write-to-file is another function, but this 
            // works for the time being
            fs.writeFileSync("./dirs.txt", filePath + "\n", {encoding: "utf8", flag: "a+"});
        }
    });

    return fileList;

}

// This call will have to be changed, probably prompt the user for the file path they would like
// But I am not sure how to do that with js, so right now it is hard-coded
let FileList = findInDir('C:\\Users\\Brian\\Projects');
/* console.log(FileList);
console.log(FileList.length); */
