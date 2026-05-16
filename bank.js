let accounts = {};
let idCounter = 1;

function createAccount(name, balance = 0) {
    const id = idCounter++;
    accounts[id] = { id, name, balance };
    return accounts[id];
}

function deposit(id, amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    accounts[id].balance += amount;
}

function withdraw(id, amount) {
    // БАГ: немає перевірки на достатність коштів
    accounts[id].balance -= amount;
}

function transfer(fromId, toId, amount) {
    // БАГ: не перевіряється існування акаунтів
    withdraw(fromId, amount);
    deposit(toId, amount);
}

function getAccount(id) {
    return accounts[id];
}

module.exports = { createAccount, deposit, withdraw, transfer, getAccount };