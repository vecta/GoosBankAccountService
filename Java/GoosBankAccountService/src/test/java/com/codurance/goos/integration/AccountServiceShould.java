package com.codurance.goos.integration;

import com.codurance.goos.AccountService;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.junit.Assert.assertEquals;

public class AccountServiceShould {

    @Test
    public void print_zero_when_asked_for_a_balance_with_no_transactions() {
        AccountService accountService = new AccountService();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outputStream));
        accountService.printBalance();
        assertEquals("0\r\n", outputStream.toString());
    }
}
