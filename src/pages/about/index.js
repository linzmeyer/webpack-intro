// we need bundlers in order to use import statements
import { camelCase } from "lodash"; // index.js:2 Uncaught SyntaxError: Cannot use import statement outside a module


/*
  after going through the steps in the README,
  you should see the output as "helloWorld"
*/
console.log( camelCase('hello world') );


// import helper
import { add } from "../../modules/helpers";
console.log(add(2 + 5));
