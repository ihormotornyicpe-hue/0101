function printReport(comparison) {
    console.log('===== TESTING REPORT =====\n');

    console.log('--- Standard Method ---');
    console.log(comparison.standard);

    console.log('\n--- Unified AI Method ---');
    console.log(comparison.unified);

    console.log('\n--- Improvement ---');
    console.log(`+ Bugs detected: ${comparison.improvement.bugDetectionIncrease}`);
    console.log(`+ Success rate diff: ${comparison.improvement.successRateDiff.toFixed(2)}%`);
    console.log(`+ Speed improvement: ${comparison.improvement.speedImprovement.toFixed(4)} ms`);

    console.log('\n=========================');
}

module.exports = { printReport };