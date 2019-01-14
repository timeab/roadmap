require('dotenv').config();
const dbProp = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
};
const testConfig = {
    domain: process.env.TEST_DOMAIN,
    host: process.env.TEST_HOST,
    port: process.env.TEST_PORT,
    browsers: [
        process.env.TEST_CHROME,
        process.env.TEST_SAFARI,
        process.env.TEST_FIREFOX
    ]
};
module.exports = { dbProp, testConfig } 