const { createAccount, deposit, withdraw, transfer, getAccount } = require('../bank');

test('Create account', () => {
    const acc = createAccount("User", 100);
    expect(acc.balance).toBe(100);
});

test('Deposit', () => {
    const acc = createAccount("User", 0);
    deposit(acc.id, 50);
    expect(getAccount(acc.id).balance).toBe(50);
});

test('Withdraw', () => {
    const acc = createAccount("User", 100);
    withdraw(acc.id, 50);
    expect(getAccount(acc.id).balance).toBe(50);
});

test('Transfer', () => {
    const a = createAccount("A", 100);
    const b = createAccount("B", 0);
    transfer(a.id, b.id, 50);
    expect(getAccount(b.id).balance).toBe(50);
});