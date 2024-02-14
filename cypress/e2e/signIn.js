///<reference types="cypress"/>
describe('Test the magento website', () => {
    it('sign in test', () => {
        //genarate randmemail
        let signInEmail
        function genarateRandomEamail() {
            const randomDomail=['gmail.com','yahoo.com','outlook.com','hotmail.com']
            const indexRandomDomain=Math.floor(Math.random()*randomDomail.length)
            let randomName=''
            const characher='qwrtyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKZXCVBNM0123456789'
            const lengthName=Math.floor(Math.random()*10)+5
            for(let i=0;i<lengthName;i++){
                randomName+=characher.charAt(Math.floor(Math.random()*characher.length))

            }
            return randomName+'@'+randomDomail[indexRandomDomain]
            
        }
        let emailSignup=genarateRandomEamail()
        signInEmail=emailSignup
        //genarate random password
        let signinpassword
        function generateRandomPassword(length) {
            const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let password = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }
            return password;
        }
        
        let password=generateRandomPassword(14)
//genarate random first user name and random last name

        let thelistOfFistName = ["Sarah", "Lara", "Nadia"]
        let theListOfTheLastName = ["Rawashdeh", "Mahafzah", "Batainah", "Shalaby"]
        let indexTheFirstName = Math.floor(Math.random() * thelistOfFistName.length)
        let indexTheLastName = Math.floor(Math.random() * theListOfTheLastName.length)

        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get('#firstname').type(thelistOfFistName[indexTheFirstName])
        cy.get('#lastname').type(theListOfTheLastName[indexTheLastName])
        cy.get('#email_address').type(emailSignup)
         cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        signinpassword=password
        //signout the page
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
cy.visit("https://magento.softwaretestingboard.com/customer/account/logout/")
//sign in 
cy.get('.panel > .header > .authorization-link > a').click()
    //type password and user name
    cy.get('#email').type( signInEmail)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type( signinpassword)
    cy.get('#send2').click()
    });
    
});