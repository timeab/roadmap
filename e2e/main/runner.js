const createTestCafe = require('testcafe');
const { testConfig } = require('../../config');

let testcafe = null;
let runner = null;

createTestCafe(testConfig.host, testConfig.port)
    .then(tc => {
        testcafe = tc;
        runner = testcafe.createRunner();
        return runner
            .src('e2e/tests/firstTest.js')
            .browsers([...testConfig.browsers])
            .run();

    }).then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });
