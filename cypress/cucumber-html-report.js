const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'reports/cucumber-json',
	reportPath: './reports/cucumber-html-report',
	metadata:{
        browser: {
            name: 'Unknown',
            version: '94'
        },
        device: 'Local test machine',
        platform: {
            name: 'Unknown',
            version: '11'
        }
    },
    customData: {
        title: 'Test Execution Report',
        data: [
            {label: 'Project', value: 'My Demo project'},
            {label: 'Release', value: '1.1.1'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 10th 2021, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 10th 2021, 02:56 PM EST'}
        ]
    }
});