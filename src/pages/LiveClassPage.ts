import { Page } from '@playwright/test';

export class LiveClassPage {
    constructor(private page: Page) {}

    async navigateTo() {
        console.log('Navigating to live class page...');
        await this.page.waitForSelector('#classes-tab');
        await this.page.click("#classes-tab");
    }

    async deleteClasses(count: number) {
        for (let i = 0; i < count; i++) {
            const deleteButtons = await this.page.$$('#classDeleteButton');
            if (deleteButtons.length === 0) {
                console.log('No more classes to delete.');
                break;
            }
            await deleteButtons[0].click();
            await this.page.waitForSelector('#deleteButton');
            await this.page.click('#deleteButton');
            console.log(`Class ${i + 1} deleted.`);
            await this.page.waitForTimeout(1000);
        }
    }

    async createLiveClass(name: string, description: string) { 
        await this.page.click('#createLiveClassButton'); 
        await this.page.fill('#classNameInput', name); 
        await this.page.fill('#classDescriptionInput', description); 
        await this.page.click('#saveClassButton'); 
        console.log('Live class created successfully.'); 
    }

    async editLiveClass(name: string, description: string) { 
        await this.page.click('#editLiveClassButton'); 
        await this.page.fill('#classNameInput', name); 
        await this.page.fill('#classDescriptionInput', description); 
        await this.page.click('#saveClassButton'); 
        console.log('Live class created successfully.'); 
    }
       
}
