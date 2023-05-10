# ISBN Validator in TypeScript

This project is a TypeScript implementation of an ISBN validator. It can validate ISBN-10 and ISBN-13 numbers.

## Tools and Libraries

- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
- Jest: A testing framework for JavaScript and TypeScript.
  ts-jest: A TypeScript preprocessor for Jest that allows testing TypeScript code.
- @types/jest: TypeScript definitions for Jest.

## Installation

Please make sure that you have Node.js (version 14 or higher) installed on your system.

### 1. Clone this repository:

```bash
git clone https://github.com/therealcraiggazimbi/_thiscouldbeit.git
```

### 2. Change to the project directory:

```bash
cd your-repo
```

### 3. Install the dependencies:

```bash
npm install
```

### 4. Compile the TypeScript code:

```bash
 cd src/
```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will run the Jest tests, and you should see the test results in the terminal.

## Space Complexity

The worst-case space complexity of this solution is O(1), as the algorithm does not require any additional data structures or memory allocation based on the input size. The space used is constant and does not depend on the size of the input ISBN.

The main operations performed by the algorithm involve string manipulation and arithmetic calculations, which do not require any additional space. The only variables used are single numbers and strings, which do not grow with the input size.
