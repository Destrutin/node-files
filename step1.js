const fs = require('fs');

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
cat(process.argv[2]);
// Selects the second argurment which is the path to the file.