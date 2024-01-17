const fs = require('fs');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(err);
            process.kill(1);
        } else {
            console.log(data);
        }
    });
}
filePath = process.argv[2];
cat(filePath);
// Selects the second argurment which is the path to the file.

async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`${url} ${err}`);
        process.kill(1);
    }
}
if (filePath.startsWith('http')) {
    webCat(filePath);
} else {
    cat(filePath);
}