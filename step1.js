const fs = require('fs');

function cat(path) {
    try {
        return fs.readFile(path, 'utf8');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
cat(process.argv[2]);
// Selects the second argurment which is the path to the file.