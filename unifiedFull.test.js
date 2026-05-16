const { evaluateSystem } = require('../../ai/riskModel');
const { generateTests } = require('../../ai/testGenerator');
const { analyzeResults } = require('../../ai/analyzer');

const { createAccount } = require('../../src/bank');

function unifiedFullTest() {

    // 1. Ініціалізація системи
    const a = createAccount("A", 100);
    const b = createAccount("", -50); // проблемний акаунт

    const accounts = {
        [a.id]: a,
        [b.id]: b
    };

    // 2. AI: оцінка ризику
    const risks = evaluateSystem(accounts);

    // 3. AI: генерація тестів
    const tests = generateTests(risks);

    // 4. Виконання тестів
    const results = tests.map(fn => fn());

    // 5. Аналіз результатів
    return analyzeResults(results);
}

// Jest тест
test('Unified AI Testing Method (Full Pipeline)', () => {

    const result = unifiedFullTest();

    console.log("UNIFIED RESULT:", result);

    expect(result.totalTests).toBeGreaterThan(0);
});