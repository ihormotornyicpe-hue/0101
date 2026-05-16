const { calculateMetrics } = require('./metrics');

function deriveSuccessRate(standard, unified) {
    const standardScore = standard.bugsFound * 2 - standard.passed - standard.avgTime / 10;
    const unifiedScore = unified.bugsFound * 2 - unified.passed - unified.avgTime / 10;
    const base = 50;

    return {
        standard: Math.min(100, Math.max(0, base + (standardScore - unifiedScore) * 10)),
        unified: Math.min(100, Math.max(0, base + (unifiedScore - standardScore) * 10))
    };
}

function compareResults(standardResults, unifiedResults) {
    const standard = calculateMetrics(standardResults);
    const unified = calculateMetrics(unifiedResults);
    const rates = deriveSuccessRate(standard, unified);

    standard.successRate = rates.standard;
    unified.successRate = rates.unified;

    return {
        standard,
        unified,
        improvement: {
            bugDetectionIncrease: unified.bugsFound - standard.bugsFound,
            successRateDiff: unified.successRate - standard.successRate,
            speedImprovement: standard.avgTime - unified.avgTime
        }
    };
}

module.exports = { compareResults };