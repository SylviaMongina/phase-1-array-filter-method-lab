// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driver, name) {
    return driver.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase()
    );
  }

  function fuzzyMatch(name, testString) {
    return name.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(driver, driverName) {
    return driver.filter((record) => record.name === driverName);
  }