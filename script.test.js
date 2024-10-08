const {
  myCity,
  myDogsArray,
  myIdentity,
  mySecondDogsArray,
  checkIfTrue,
  firstDog,
  division,
  myIdentityBis
} = require("./script.js");

// Step 1 :

test('should define myCity as "Nantes"', () => {
  expect(myCity).toBe("Nantes");
});

// Step 2 :

test("should define myDogsArray with two dog breeds", () => {
  expect(myDogsArray).toEqual(expect.arrayContaining(["Labrador", "Bulldog"]));
  expect(myDogsArray.length).toBe(2);
  expect(myDogsArray[0]).toBe("Labrador");
});

// Step 3 :

test("should define myIdentity object with firstname, lastname, and age", () => {
  const keys = Object.keys(myIdentity);
  expect(keys).toHaveLength(3);
  expect(keys).toEqual(
    expect.arrayContaining(["firstname", "lastname", "age"])
  );
  expect(typeof myIdentity.age).toBe("number");
});

// Step 4 : le console.log n'est pas testé.

// Step 5 :

test("should reassign the second element of myDogsArray", () => {
  console.log(mySecondDogsArray);
  expect(mySecondDogsArray[1]).toBe("Chihuahua");
});

// Step 6 :

test("should define isTrue as a boolean", () => {
  expect(checkIfTrue).toBe(false);
  expect(typeof checkIfTrue).toBe("boolean");
});

// Step 7 :

test("should store the first dog of myDogsArray in a variable", () => {
  expect(firstDog).toBe("Labrador");
});

// Step 8 :

test("should define a variable that sums two numbers", () => {
  expect(division).toBe(2);
});

// Step 9 & 10 :

test("Should check if myIdentityBis is an object with the fourth expected properties", () => {
  const keys = Object.keys(myIdentityBis);
  expect(keys).toHaveLength(4);
  expect(keys).toEqual(
    expect.arrayContaining(["firstname", "lastname", "age", "address"])
  );
  expect(myIdentityBis.address).toBe("United-States");
})
