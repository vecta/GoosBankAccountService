using System;
using System.IO;
using NUnit.Framework;

namespace BankAccountService.IntegrationTests
{
    [TestFixture]
    public class AccountServiceWill
    {
        [Test]
        public void PrintZeroWhenAskedForABalanceWithNoTransactions()
        {
            var consoleOutput = new StringWriter();
            var accountService = new AccountService();
            Console.SetOut(consoleOutput);
            accountService.PrintBalance();
            Assert.That(consoleOutput.ToString(), Is.EqualTo("0\r\n"));
        }
    }
}
