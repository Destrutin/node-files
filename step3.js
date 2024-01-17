const fs = require('fs').promises;
const axios = require('axios');

function cat(path) {
    try {
        return fs.readFile(path, 'utf8');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

// Selects the second argurment which is the path to the file.

async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(response.data);
    } catch (err) {
        console.error(`${url} ${err}`);
        process.exit(1);
    }
}

async function write(path, content) {
    try {
        await fs.writeFile(path, content, 'utf8'); 
    } catch (err) {
        console.error(err);
        process.exit(1)
    }
}

async function output() {
    let outputFileName;
    let path;
    let content;


    let outIndex = process.argv.indexOf('--out');
    if (outIndex !== -1) {
        outputFileName = process.argv[outIndex + 1];
        path = process.argv[outIndex + 2]; 
    } else {
        path = process.argv[2];
    }

    try {
        if (path.startsWith('http')) {
            content = await webCat(path);
        } else {
            content = await cat(path);
        }

        if (outputFileName) {
            write(outputFileName, content);
        } else {
            console.log(content);
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
output();