import * as _ from 'lodash';
import { Config } from 'karma';
import { Configuration } from 'webpack';

export = (config: any) => {

    const karma: Config = config;

    karma.set({
        files: [
            { pattern: 'src/spec.module.js' },
        ],
        preprocessors: {
            '**/spec.module.js': ['webpack']
        },
        browsers: ['Nightmare'],
        frameworks: [
            'jasmine',
        ],
        reporters: ['progress'],
    });

    config.set({
        mime: {
            'text/x-typescript': ['ts', 'tsx'],
        },
        nightmareOptions: {
            width: 800,
            height: 600,
            show: false,
            devTools: false
        },
        webpackMiddleware: {
            stats: 'minimal'
        }
    });

};
