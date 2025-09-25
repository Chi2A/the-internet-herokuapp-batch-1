import { test ,} from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { NotificationMessagePage } from "../pages/notification-message-page";

test('Notification Message Validation', async ({ page }) => { 

    let homePage = new HomePage(page);
    let notificationMessagePage = new NotificationMessagePage(page);

    await page.goto('https://the-internet.herokuapp.com/');
    await homePage.clickOnNotificationMessage();
    await notificationMessagePage.validateNotificationMessage('Notification Message');
     await notificationMessagePage.navigateToClickHereLink();
    await notificationMessagePage.validateBlueBoxMessage('Action unsuccesful, please try again');
    await notificationMessagePage.validateNotificationMessage('Action successful');

})
