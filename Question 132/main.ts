// *Question 132:* Discuss the difference between default and named exports in JavaScript modules.

// *Explain & TIP:* JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
// Importing named exports:
import { utilOne, utilTwo } from "./utils";

// Importing a default export:
import Calculator from "./calculator";