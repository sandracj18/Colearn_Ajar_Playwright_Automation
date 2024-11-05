import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LiveClassPage } from '../pages/LiveClassPage';

test.describe('Create Live Class', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.login('admin@iq.education', 'Welcome1');
    });

    test('Create a new live class', async ({ page }) => {
        const liveClassPage = new LiveClassPage(page);
        await liveClassPage.navigateTo();
        // Assuming there's a method to create a live class
        await liveClassPage.createLiveClass('New Class Name', 'Class Description');
    });
});
