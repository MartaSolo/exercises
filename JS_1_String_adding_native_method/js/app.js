// Dodanie natywnej metody
// Dodaj natywną metodę setAtTheEnd(word) do obiektów typu String, której zadaniem jest usunięcie wyrazu podanego jako parametr ze zdania oraz dodanie go na koniec.
// Przykład:
// “Ala ma kota Bzika”.setAtTheEnd(“kota”);
// Zwróci: “Ala ma Bzika kota”

String.prototype.setAtTheEnd = function (word) {
  return `${this.replace(word, "")} ${word}`.replace("  ", " ");
};

// String.prototype.setAtTheEnd = function (word) {
//   return (this.replace(word, "") + " " + word).replace("  ", " ");
// };

const text1 = "Ala ma kota Bzika";
// console.log(text1.setAtTheEnd("kota"));
// Ala ma Bzika kota

// ---------------------
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const squareNumbers = (array) => {
  return array.map((el) => {
    return Math.pow(el, 2);
  });
};

console.log(squareNumbers(numbers));
