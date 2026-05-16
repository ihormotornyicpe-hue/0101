// ai/riskModel.js

function calculateRisk(account) {
    let risk = 0;

    // 1. Негативний баланс (критичний дефект)
    if (account.balance < 0) risk += 0.6;

    // 2. Дуже великий баланс (потенційна помилка)
    if (account.balance > 100000) risk += 0.2;

    // 3. Порожнє ім’я
    if (!account.name || account.name.length === 0) risk += 0.2;

    // 4. Випадковий шум (імітація ML)
    risk += Math.random() * 0.2;

    return Math.min(risk, 1);
}

function evaluateSystem(accounts) {
    return Object.values(accounts).map(acc => ({
        id: acc.id,
        risk: calculateRisk(acc)
    }));
}

module.exports = { evaluateSystem };