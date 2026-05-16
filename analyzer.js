// ai/analyzer.js

function analyzeResults(testResults) {

    let total = testResults.length;
    let passed = 0;
    let failed = 0;
    let defects = [];

    testResults.forEach(r => {
        if (r.success) {
            passed++;
        } else {
            failed++;
            defects.push(r.type);
        }
    });

    return {
        totalTests: total,
        passed,
        failed,
        defectsFound: defects.length,
        defects
    };
}

function compareMethods(standard, unified) {

    return {
        standard: {
            tests: standard.totalTests,
            defects: standard.defectsFound
        },
        unified: {
            tests: unified.totalTests,
            defects: unified.defectsFound
        },
        improvement: {
            defectDetectionIncrease:
                unified.defectsFound - standard.defectsFound,

            efficiency:
                (unified.defectsFound / unified.totalTests) -
                (standard.defectsFound / standard.totalTests)
        }
    };
}

module.exports = { analyzeResults, compareMethods };