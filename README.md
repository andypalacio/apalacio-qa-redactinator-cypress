# apalacio-qa-redactinator-cypress

This repository contains the code developed as part of the QA Challenge for RubiconMD.

## Description

This suite of automated test cases covers: 
   - The access to the eConsults
   - The activation of attachments 
   - The addition of censors on the images

There are a lot of Ideas that I'd like to implement but in order to optimize time I decided not to, but we can discuss them on a call.


## Prerequisites

To run the automated tests, you will need to have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [Cypress](https://www.cypress.io/)
- [Cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- [Cypress-image-snapshot](https://github.com/simonsmith/cypress-image-snapshot)
- [Cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)


## Installation

1. Clone the repo

        git clone https://github.com/andypalacio/Aiwyn-AndresPalacio.git

2. Install NPM packages

        npm install
## Usage

### Executing the test cases
You can execute the test cases headed, using the following command

      npx cypress open

Otherwise, you can run them headless using

      npx cypress run

with this option you will be able to access the Mochawesome report located on 
         
      /apalacio-qa-redactinator-cypress/cypress/reports/html/index.html

## Contact

* Andres Palacio - andresepalacio@gmail.com
* Project Link: https://github.com/andypalacio/Aiwyn-AndresPalacio

 
