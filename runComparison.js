const fs = require('fs');
const path = require('path');
const { compareResults } = require('./results/compare');
const { printReport } = require('./results/report');

// Виведення справжнього порівняння результатів
const standardResults = [
    { status: 'passed', bugDetected: false, time: 12 },
    { status: 'failed', bugDetected: true, time: 15 },
    { status: 'passed', bugDetected: false, time: 10 }
];

const unifiedResults = [
    { status: 'failed', bugDetected: true, time: 9 },
    { status: 'failed', bugDetected: true, time: 11 },
    { status: 'passed', bugDetected: false, time: 8 }
];

const comparison = compareResults(standardResults, unifiedResults);

// Виведення результатів порівняння у консоль
console.log('Справжнє порівняння результатів:');
console.log(JSON.stringify(comparison, null, 2));

printReport(comparison);

const dashboardData = {
  standardResults,
  unifiedResults,
  comparison
};

const dashboardDir = path.join(__dirname, 'dashboard');
const dashboardPath = path.join(dashboardDir, 'data.js');

// Перевірка існування директорії та створення, якщо її немає
if (!fs.existsSync(dashboardDir)) {
  fs.mkdirSync(dashboardDir);
}

// Запис даних у файл із обробкою помилок
try {
  fs.writeFileSync(dashboardPath, `window.dashboardData = ${JSON.stringify(dashboardData, null, 2)};`, 'utf8');
  console.log(`Dashboard data written to ${dashboardPath}`);
} catch (error) {
  console.error('Error writing dashboard data:', error);
}
