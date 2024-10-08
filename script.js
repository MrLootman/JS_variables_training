/**
 * TODO - Les variables
 */

// * 1. Ecrit une variable dont le nom est myCity, et assigne lui la chaîne de caractère "Nantes".

const myCity = "Nantes";

// * 2. Ecrit une variable dont le nom est myDogsArray, et ajoutes-y deux races de chien.
// * Le premier chien doit être un Labrador, et le deuxième un Bulldog.

// Supprime cette ligne, et écris ton code 🔥
const myDogsArray = ["Labrador", "Bulldog"];

// * 3. Ecrit une variable dont le nom est myIdentity, dont la valeur sera un objet.
// * Cet objet contiendra trois clés:
// *     -> Une clé "firstname",
// *     -> Une clé "lastname",
// *     -> Une clé "age"
// * A chacune de ces clés, associe lui une donnée cohérente avec qui tu es.
// ! ⚠️ Attention : la valeur de la clé "age" doit être de type number.

// Supprime cette ligne, et écris ton code 🔥
const myIdentity = {
  firstname: "Nicolas",
  lastname: "Michel",
  age: 32,
}

// * 4. Utilise la méthode console.log() pour faire apparaître la valeur de la clé lastname de
// * l'objet myIdentity dans ta console.
// * Cet exercice ne contient pas de test unitaire.

// Supprime cette ligne, et écris ton code 🔥
console.log(myIdentity.lastname)

// ? 5. La ligne ci-dessous créé une copie du tableau myDogsArray.
// * Changes le second chien présent dans le tableau mySecondDogsArray en Chihuahua.

const mySecondDogsArray = structuredClone(myDogsArray);

// * Supprime cette ligne, et écris ton code 🔥
mySecondDogsArray[1] = "Chihuahua";

// * 6. Créé une variable nommée checkIfTrue, dont la valeur sera égale à false.

// Supprime cette ligne, et écris ton code 🔥
const checkIfTrue = false;

// * 7. Créé une variable firstDog qui stocke le premier chien présent dans le tableau myDogsArray.

// Supprime cette ligne, et écris ton code 🔥
const firstDog = myDogsArray[0];

// * 8. Créé une variable division, qui divise 10 par 5.

// Supprime cette ligne, et écris ton code 🔥
const division = 10 / 5;

// ? Ci-dessous, je créé simplement une copie de l'objet myIdentity.
// * 9. Réassigne les valeurs des clés firstname et lastname de l'objet myIdentityBis,
// * déclaré ci-dessous.
// * Les valeurs devront être Mickey pour le firstname, Mouse pour le lastname.

const myIdentityBis = structuredClone(myIdentity);

myIdentityBis.firstname = "Mickey"
myIdentityBis.lastname = "Mouse"

// Supprime cette ligne, et écris ton code 🔥

// * 10. Rajoute une propriété address dans l'objet myIdentity, et associe-lui la valeur 
// * "United-States".

// Supprime cette ligne, et écris ton code 🔥
myIdentityBis.address = "United-States";

/**
 * * La ligne ci-dessous concerne l'export des variables.
 * * Tu peux la laisser intacte.
 */

module.exports = {
  myCity,
  myDogsArray,
  myIdentity,
  myIdentityBis,myIdentityBis,
  mySecondDogsArray,
  checkIfTrue,
  firstDog,
  division,
};
