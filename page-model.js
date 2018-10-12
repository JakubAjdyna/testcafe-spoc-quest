import { Selector } from 'testcafe';
import { AngularJSSelector } from 'testcafe-angular-selectors';

export default class Page {
    constructor () {
        //login page
        this.userName = Selector('#username');
        this.password = Selector('#password');
        this.loginButton = Selector('button').withText('Login');
        //main page
        this.searchField = AngularJSSelector.byModel('c.searchTerm');

    }
}