export const logValidationError = (missingKeys, wrongTypeKeys) => {
  let errorMessage = "Invalid object.";

  if (missingKeys.length > 0) {
    errorMessage += " The following key(s) are missing:";
    errorMessage += appendKeysToErrorMessage(missingKeys);
  }

  if (wrongTypeKeys.length > 0) {
    errorMessage += " The following key(s) are of the wrong type:";
    errorMessage += appendKeysToErrorMessage(wrongTypeKeys);
  }

  console.log(errorMessage);
};

const appendKeysToErrorMessage = (invalidKeyArray) => {
  let appendingKeyString = "";
  invalidKeyArray.forEach((key, i) => {
    if (lastKeyInArray(invalidKeyArray, i)) {
      appendingKeyString += ` ${key}.`;
    } else {
      appendingKeyString += ` ${key},`;
    }
  });
  return appendingKeyString;
};

const lastKeyInArray = (array, i) => {
  return i + 1 === array.length;
};
