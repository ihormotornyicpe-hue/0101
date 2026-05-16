function calculateMetrics(testResults) {
    const total = testResults.length;

    const passed = testResults.filter(t => t.status === 'passed').length;
    const failed = testResults.filter(t => t.status === 'failed').length;

    const bugsFound = testResults.filter(t => t.bugDetected).length;

    const executionTime = testResults.reduce((sum, t) => sum + t.time, 0);

    return {
        total,
        passed,
        failed,
        bugsFound,
        successRate: (passed / total) * 100,
        avgTime: executionTime / total
    };
}

module.exports = { calculateMetrics };