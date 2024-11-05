import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async navigateTo() {
        await this.page.goto('https://admin-web.dev.colearn.id/#/login');
    }

    async login(username: string, password: string) {
        await this.page.fill('#loginEmailField', username);
        await this.page.fill('#loginPasswordField', password);
        await this.page.click('#loginSubmit');
        console.log('Logged in successfully.');
    }
}
