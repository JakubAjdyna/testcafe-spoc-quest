import { Role } from 'testcafe';
import Page from './page-model';

const page = new Page();

const testUser = Role('https://dev60472.service-now.com/sp', async t => {
    await t
        .typeText(page.userName, 'test.user')
        .typeText(page.password,'Password1#')
        .click(page.loginButton);
});

fixture `Service Portal`
    .page `https://dev60472.service-now.com/sp`
    .beforeEach(async t => { 
        await t
        .maximizeWindow()
        .useRole(testUser);
    });

test('Test 1', async t => {
    await t
        .click(page.costam)

});
