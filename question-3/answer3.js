/*
Create a script that will do the following:
1. Remove Log files
- remove all the files from the Logs directory, if exists
- output the file names to delete
- remove the Logs directory
2. Create Log files
- create a Logs directory, if it does not exist
- change the current process to the new Logs directory
- create 10 log files and write some text into the file
- output the files names to console
- Hint: use the fs module and path module, and the process current
working directory to build directory path. It is acceptable, to have a
remove.js script and separate add.js script.
*/
const fs = require('fs');
const path = require('path');

if (fs.existsSync('./logs')) {
    const folderContents = fs.readdirSync('./logs', { withFileTypes: true });
    for (let i = 0; i < folderContents.length; i++) {
        const file = folderContents[i]
        if (file.isFile()) {
            fs.unlinkSync(`./logs/${file.name}`)
            console.log(`delete files...${file.name}`)
        }
    }
    fs.rmdirSync('./logs');
    console.log('Deleted directory: ./logs');
}

if (!fs.existsSync('./logs')) {
    fs.mkdirSync('./logs')
    fs.opendirSync('./logs')
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`
        fs.writeFileSync(`./logs/${fileName}`, `This is log file ${i}`)
        console.log(`Created file: ${fileName}`)
    }
}
