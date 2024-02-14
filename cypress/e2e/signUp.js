///<reference types="cypress"/>
describe('Test the magento website', () => {
    it('Sign up ', () => {

        let thelistOfFistName = ["Sarah", "Lara", "Nadia"]
        let theListOfTheLastName = ["Rawashdeh", "Mahafzah", "Batainah", "Shalaby"]
        let indexTheFirstName = Math.floor(Math.random() * thelistOfFistName.length)
        let indexTheLastName = Math.floor(Math.random() * theListOfTheLastName.length)
        let randomNumberForEmail = Math.floor(Math.random() * 50000).toString()
        function generateRandomPassword(length) {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            return password;
        }
// go to website and enter user name and email and password
        let password = generateRandomPassword(14)
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get('#firstname').type(thelistOfFistName[indexTheFirstName])
        cy.get('#lastname').type(theListOfTheLastName[indexTheLastName])
        cy.get('#email_address').type(thelistOfFistName[indexTheFirstName] + "." + theListOfTheLastName[indexTheLastName] + randomNumberForEmail + "@mail.com")
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()


    });

});