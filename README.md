# Adobe & AEM Engineering Test
## Author: Gerald Prendi

Requirements from AEM_Engineering_Testv1.2.pdf

# GOAL
###  **Provide a http endpoint to accept decimal numbers and return as a response romal numerals**

## Requirements
### Base
- [x] Provide an implementation of a function to convert decimal numbers to roman numerals from a given range 1 - 255
- [x] Provide a http server, with a http endpoint 'rommannumeral' that accepts 'query' as a parameter.
- [x] Provide a testing suite
- [x] Provide documentaion on implementation detals
- [x] Provide clear instructions how to build 

### Extra
- [ ] Extend range from 1 - 255 to 1 - 3999
- [ ] Compute ranges in parallel using multithreading or asynchronous calls.
- [ ] Provide DevOps capabilities:
    - [ ] Docker containers
    - [ ] Monitoring
    - [ ] Metrics
    - [ ] Logging


### Plan of work
1. Read the provided pdf containing the exercise
2. Understand and lay out the Goal and Requirements
3. Select the tech stack
4. Select the feature set that will be provided
5. Research on Roman Numerals, and how they are converted from decimal representation
6. Write unit tests
7. Start implementing the functionality
8. Refactor code and tests
9. Provide base requirements + documentation
10. After base requirements provided, continue with the extras


## Roman Numerals
Definition from wikipedia
> Roman numerals are a numeral system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. 

> Numbers in this system are represented by combinations of letters from the Latin alphabet. 

>| Symbol |  I  |  V  |  X  |  L  |  C  |  D  |  M  |
>| ------ | --- | --- | --- | --- | --- | --- | --- |
>| Value  |  1  |  5  |  10 |  50 | 100 | 500 | 1000|

> A numeral of the previous order can be added in front of another numeral, implying x less than y, where xy are two numerals that are adjacent
> (i.e) V is 5, while IV is 4 (1 less than 5); L is 50, while XL is 40 (10 less than 50);

## Project Layout
| Name | Children | Description |
| --- | --- | --- |
|bin/ |     |     |           
|     | www | driver code for the project, start point of the project where the webserver is actually created and listens to a port. |
|docs/|     |       empty folder for documentations, run `npm run docs` to generate docs in this folder |
|src/ |     |       source code of the application |
|  | conversion/    |       provides conversion methods, in this case it has convert decimalToRoman |
|  |
|  | routes/        |       http routes folder, this is where the different endpoints logic goes |
|  | test/          |       test package |
|  | app.js         |       application entry, where all the logic gets assembled |
| .eslint.json |       |       linter config file | 
| .gitignore   |       |       configuration for git to ignore certain files, and not to commit them |
| package.json |       |       the application npm package, holds dependencies and other crucial information for the project |
|  README.md   |       |       (this readme)   |


## How to build and run

To install dependecies
> `npm install`

To start nodejs application
> `npm start`

## Scripts

Provided scripts with a description

| Script Name | Description |
|    ---      |     ---     |
| `npm install` | Installs all dependencies found in package.json |
| `npm start`   | Start the web server |
| `npm test`    | Does linting on the source then executes test package |
| `npm run lint` | Does linting and ouputs the warning and errors |
| `npm run lint:fix` | Fixes errors and warning that the linter is able to fix |
| `npm run docs` | Generate documentation from jsdoc comments in the code and outputs a static page in /docs |
| `npm run test:nolint` | Only executes the test package with no linting | 

## Dependencies

To have a look at the all the dependencies that have been used have a look at the Insights tab in the Github Repo of the project.
Here I will be providing only a small list of the most important dependencies used.
|  Dependency | Description |
|     ---     |     ---     |
|   express   |  web framework for nodejs |
|   mocha, chai, supertest | used for testing |
|   eslint    | (pattern checker) linter for javascript, configuration found on .eslintrc.json|
| dotenv  | Loads environment variables from .env file |


## Features
- web server with http endpoint 'romannumerals'
- use of web frameworks such as express
- decimal to roman numeral conversion
- documentaion using jsdoc
- use of TDD (test driven development)
- linter for style checking
- npm scripts


*NOTE this branch only contains the **base requirements** that were required from me to implement, but I took as a personal challenge to test myself and maybe win some extra points to also **implement the extras**, they can be found in the branch **optional***