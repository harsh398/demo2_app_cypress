#  Automation Project 

This Automation test framework written Using Cypress with Page Objects Design pattern  

## Author
Harsharan Deep 

## Tool and Languages User : - 
1. Cypress [Here](https://www.cypress.io/)
2. NPM/Nodejs [Here](https://nodejs.org/en/)
3. Language Used - Javascript 
4. Design Pattern - Page Object Model 

## Test Setup

1. Install IDE( Preferebly VS Code[Here](https://code.visualstudio.com/) ) VS Code and Node JS.
2. Open Terminal in the Project Directory
3. Run `npm install` 
4. Run  `npm run test` - to Run Headless Test 
5. Run `npm run open` to Open Cypress UI to run test in browser 

## TestCases 

1. FirstTestCase - Covers Changing Money Input , Duration , Purpose  , Sorting and Filtering and Making sure the changing paramters also changes the Search Result ( In this Sscript i am looking ofr a static Product which is 331 in production case i would rely on data provided )
2. SecondTestCase - Covers Edge case - Where user provides null value and Unvailable duration and values get updated and get alert message 

## Fixture File 
1. Postive and Null Values are being provided using Fixture File 

## Jenkins 

1. To Run Jenkins solution ( Node and Git should be installed and Path be should  be given properly) on your Jenkins Environment
2. For this Project i am using Windows system that is why i used Batch Commands 
3. Jenkins File inclued three stpes :-
   a. Cloning the Repo
   b. Intalling all the Dependencies using npm 
   c. Starting the Test 
   






