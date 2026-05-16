window.dashboardData = {
  standardResults: [
    { status: 'passed', bugDetected: false, time: 12 },
    { status: 'failed', bugDetected: true, time: 15 },
    { status: 'passed', bugDetected: false, time: 10 }
  ],
  unifiedResults: [
    { status: 'failed', bugDetected: true, time: 9 },
    { status: 'failed', bugDetected: true, time: 11 },
    { status: 'passed', bugDetected: false, time: 8 }
  ],
  comparison: {
    standard: {
      passed: 2,
      failed: 1,
      bugsFound: 1,
      successRate: 66.67,
      avgTime: 12.33
    },
    unified: {
      passed: 1,
      failed: 2,
      bugsFound: 2,
      successRate: 33.33,
      avgTime: 9.33
    }
  }
};