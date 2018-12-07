const fs = require('fs');

//Reading from api directory; if promise is resolved then will return a map with 
// api's file name 


const getPath = async () => {
    return new Promise((resolve, reject) => {
        fs.readdir(process.cwd().concat('/api'), (error, data) => {

            if (error) reject(error)

            resolve(data.map((file, list) => file.split('.')[0]));
        });
    })
};
module.exports = getPath;