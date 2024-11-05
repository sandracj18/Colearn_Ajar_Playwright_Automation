import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
    },    
    projects: [
        {
            name: 'run-tests',
            testMatch: ['tests/**/*.spec.ts'],
        },
    ],
    reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
};

export default config;
