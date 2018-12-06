const fs = require('fs');
const getPath = async () => {
    return new Promise((resolve, reject) => {
        fs.readdir(process.cwd().concat('/api'), (error, data) => {

            if (error) reject(error)

            resolve(data.map((file, list) => file.split('.')[0]));
        });
    })
};
module.exports = getPath;