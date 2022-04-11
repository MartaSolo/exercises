// Dodanie natywnej metody
// Dodaj natywną metodę setAtTheEnd(word) do obiektów typu String, której zadaniem jest usunięcie wyrazu podanego jako parametr ze zdania oraz dodanie go na koniec.
// Przykład:
// “Ala ma kota Bzika”.setAtTheEnd(“kota”);
// Zwróci: “Ala ma Bzika kota”

// String.prototype.setAtTheEnd = function (word) {
//   return `${this.replace(word, "")} ${word}`.replace("  ", " ");
// };

String.prototype.setAtTheEnd = function (word) {
  return (this.replace(word, "") + " " + word).replace("  ", " ");
};

const text1 = "Ala ma kota Bzika";

// console.log(text1.setAtTheEnd("kota"));
console.log(text1.setAtTheEnd("kota"));
