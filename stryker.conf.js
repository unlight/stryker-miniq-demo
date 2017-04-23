const webpack = require('webpack');

module.exports = function(config) {
    config.set({
        files: [
            { pattern: 'build/source/**/stryker.component.js', mutated: true, included: false },
            'build/source/**/stryker.component.spec.js',
        ],
        testRunner: 'karma',
        testFramework: 'jasmine',
        coverageAnalysis: 'perTest',
        reporter: ['clear-text', 'html', 'progress'],
        htmlReporter: {
            baseDir: '.testresults/mutation'
        },
        // logLevel: 'debug', // --logLevel
        maxConcurrentTestRunners: 1,
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
                    rules: [
                        {
                            test: /\.component\.html$/,
                            use: ['raw-loader'],
                        },
                        {
                            test: /\.component\.scss$/,
                            use: ['raw-loader', 'sass-loader'],
                        },
                        {
                            test: /\.component\.[tj]s$/,
                            use: ['angular2-template-loader'],
                        }
                    ]
                },
            }
        },
        // karmaConfigFile: 'karma.conf.ts' // <-- add your karma.conf.js file here
        // mutate: [
        //     'src/**/*.js' // <-- mark files for mutation here
        // ]
    });
}
