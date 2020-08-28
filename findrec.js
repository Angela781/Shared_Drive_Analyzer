const fs = require('fs');
const path = require('path');

function findInDir (dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath= path.join(dir, file);
        const fileStat = fs.lstatSync(filePath);

        if (fileStat.isDirectory()) {
            findInDir(filePath, fileList);
        }
        else {
            fileList.push({fpath: filePath});
        }
    });

    return fileList;

}

let FileList = findInDir('C:\\Users\\Brian\\Projects');
console.log(FileList);

const jsonified = JSON.stringify(FileList);

fs.writeFile("./dirs.json", jsonified, 'utf8', function(err) {
    if (err) {
        console.log(err);
    }

    console.log("File was saved!");
});

//console.log(findInDir('C:\\Users\\Brian'));