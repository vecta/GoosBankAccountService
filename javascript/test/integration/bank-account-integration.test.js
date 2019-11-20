const StringWriter = require("../../src/StringWriter");
const BankAccountService = require('../../src/BankAccountService');

describe('Bank account integration tests', () => {
    let oldLog;

    it('should print zero when asked for a balance with no transactions', () => {
        // hijack console.log
        let consoleOutput = "";
        console.log = message => {
            consoleOutput += message;
        };

        const stringWriter = new StringWriter();
        const accountService = new BankAccountService(stringWriter);

        accountService.printBalance();
        expect(consoleOutput).toEqual("0\n");
    });

    beforeEach(() => {
        oldLog = console.log;
    });

    afterEach(() => {
      console.log = oldLog;
    })
});
