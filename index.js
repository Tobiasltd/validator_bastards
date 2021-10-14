import { validator } from "./validator.js";
import { barSchema, personSchema, carSchema } from "./testfiles/schemas.js";
import { barObj, personObj, carObj } from "./testfiles/correctObjects.js";
import { barObjF, personObjF, carObjF } from "./testfiles/falseObjects.js";

console.log(validator(personSchema, personObjF));
