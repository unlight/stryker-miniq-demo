const webpack = require('webpack');

module.exports = function(config) {
    config.set({
        files: [
            { pattern: 'src/**/*.component.js', mutated: true, included: false },
            'src/**/*.component.spec.js', // { pattern: 'pattern', included: true, mutated: false }
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        coverageAnalysis: 'perTest',
        reporter: ['clear-text', 'html', 'progress'],
        htmlReporter: {
            baseDir: '.testresults/mutation'
        },
        // logLevel: 'debug', // --logLevel
        // maxConcurrentTestRunners: 1,
        clearTextReporter: {
            maxTestsToLog: 0
        },
        karmaConfig: {
            preprocessors: {
                '**/*.spec.js': ['webpack'],
                // '**/spec.module.js': ['webpack'],
            },
            browsers: ['Nightmare'],
            webpack: {
                module: {
                    exprContextCritical: false,
                },
            }
        },
        // karmaConfigFile: 'karma.conf.ts' // <-- add your karma.conf.js file here
        // mutate: [
        //     'src/**/*.js' // <-- mark files for mutation here
        // ]
    });
}
