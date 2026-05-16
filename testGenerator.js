// ai/testGenerator.js

const { withdraw, transfer, deposit } = require('../src/bank');

function generateTests(riskData) {
    const tests = [];

    riskData.forEach(r => {

        // Високий ризик → агресивні тести
        if (r.risk > 0.7) {

            // Тест на від'ємний баланс
            tests.push(() => {
                try {
                    withdraw(r.id, 100000);
                    return { type: "negative_balance", success: false };
                } catch(e) {
                    return { type: "negative_balance", success: true };
                }
            });

            // Тест неіснуючого акаунта
            tests.push(() => {
                try {
                    transfer(9999, r.id, 50);
                    return { type: "invalid_account", success: false };
                } catch(e) {
                    return { type: "invalid_account", success: true };
                }
            });
        }

        // Середній ризик
        if (r.risk > 0.4) {
            tests.push(() => {
                try {
                    deposit(r.id, -50);
                    return { type: "invalid_deposit", success: false };
                } catch(e) {
                    return { type: "invalid_deposit", success: true };
                }
            });
        }
    });

    return tests;
}

module.exports = { generateTests };