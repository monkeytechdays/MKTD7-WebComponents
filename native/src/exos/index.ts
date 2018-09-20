import '../helper';

import {default as exo0} from './exo-0/exo';
import {default as exo1} from './exo-1/exo';
import {default as exo2} from './exo-2/exo';
import {default as exo3} from './exo-3/exo';
import {default as exo4} from './exo-4/exo';
import {default as exo5} from './exo-5/exo';
import {default as exo6} from './exo-6/exo';
import {default as exo7} from './exo-7/exo';

export interface Exercise {
    type?: string;
    name: string;
    readme: string;
    runner: () => any;
    tests: () => Promise<any>;
}

export const exos: Exercise[] = [
    {
        name: "Oldies...",
        readme: require('./exo-0/README.md'),
        runner: () => exo0("42"),
        tests: () => import( /* webpackChunkName: "test-0" */ './exo-0/exo.spec')
    },
    {
        type: "Custom Elements",
        name: "Hello World",
        readme: require('./exo-1/README.md'),
        runner: () => exo1(),
        tests: () => import( /* webpackChunkName: "test-1" */ './exo-1/exo.spec')
    },
    {
        type: "Custom Elements", name: "Life cycle Hooks",
        readme: require('./exo-2/README.md'),
        runner: () => exo2(),
        tests: () => import( /* webpackChunkName: "test-2" */ './exo-2/exo.spec')
    },
    {
        type: "Custom Elements", name: "Attributes",
        readme: require('./exo-3/README.md'),
        runner: () => exo3(),
        tests: () => import( /* webpackChunkName: "test-3" */ './exo-3/exo.spec')
    },
    {
        type: "Custom Elements", name: "Observe attributes",
        readme: require('./exo-4/README.md'),
        runner: () => exo4(),
        tests: () => import( /* webpackChunkName: "test-4" */ './exo-4/exo.spec')
    },
    {
        type: "Custom Elements", name: "Events",
        readme: require('./exo-5/README.md'),
        runner: () => exo5(),
        tests: () => import( /* webpackChunkName: "test-5" */ './exo-5/exo.spec')
    },
    {
        type: "Shadow DOM", name: "Shadow DOM",
        readme: require('./exo-6/README.md'),
        runner: () => exo6(),
        tests: () => import( /* webpackChunkName: "test-6" */ './exo-6/exo.spec')
    },
    {
        type: "HTML Template", name: "HTML Template",
        readme: require('./exo-7/README.md'),
        runner: () => exo7(),
        tests: () => import( /* webpackChunkName: "test-7" */ './exo-7/exo.spec')
    }
];

export const prefix = '#exo-';