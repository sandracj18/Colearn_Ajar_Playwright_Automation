import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LiveClassPage } from '../pages/LiveClassPage';

test.describe('Delete Live Class', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login('admin@iq.education', 'Welcome1');
    });

    test('Delete classes from live class page', async ({ page }) => {
        const liveClassPage = new LiveClassPage(page);
        await liveClassPage.navigateTo();
        await liveClassPage.deleteClasses(10);
    });
});
