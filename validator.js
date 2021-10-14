import { logValidationError } from "./errorMessage.js";

export const validator = (schema, objToCompare) => {
  const wrongTypeKeys = [];
  const missingKeys = [];

  compareObjTypesToSchema(wrongTypeKeys, missingKeys, schema, objToCompare);

  if (thereAreInvalidKeys(wrongTypeKeys, missingKeys)) {
    logValidationError(wrongTypeKeys, missingKeys);
    return false;
  } else {
    return true;
  }
};

const compareObjTypesToSchema = (
  missingKeys,
  wrongTypeKeys,
  schema,
  objToCompare
) => {
  Object.keys(schema).forEach((key) => {
    switch (schema[key]) {
      case "object":
        compareObjectType(missingKeys, wrongTypeKeys, key, objToCompare);
        break;
      case "array":
        compareArrayType(missingKeys, wrongTypeKeys, key, objToCompare);
        break;
      default:
        comparePrimitiveTypes(
          missingKeys,
          wrongTypeKeys,
          schema,
          key,
          objToCompare
        );
        break;
    }
  });
};

const compareObjectType = (missingKeys, wrongTypeKeys, key, objToCompare) => {
  if (Array.isArray(objToCompare[key]) || typeof objToCompare[key] !== "object")
    pushKeyToInvalidKeyArrays(missingKeys, wrongTypeKeys, key, objToCompare);
};

const compareArrayType = (missingKeys, wrongTypeKeys, key, objToCompare) => {
  if (!Array.isArray(objToCompare[key]))
    pushKeyToInvalidKeyArrays(missingKeys, wrongTypeKeys, key, objToCompare);
};

const comparePrimitiveTypes = (
  missingKeys,
  wrongTypeKeys,
  schema,
  key,
  objToCompare
) => {
  if (typeof objToCompare[key] !== schema[key])
    pushKeyToInvalidKeyArrays(missingKeys, wrongTypeKeys, key, objToCompare);
};

const pushKeyToInvalidKeyArrays = (
  missingKeys,
  wrongTypeKeys,
  key,
  objToCompare
) => {
  if (objToCompare[key] === undefined) {
    missingKeys.push(key);
  } else {
    wrongTypeKeys.push(key);
  }
};

const thereAreInvalidKeys = (wrongTypeKeys, missingKeys) =>
  wrongTypeKeys.length > 0 || missingKeys.length > 0;
