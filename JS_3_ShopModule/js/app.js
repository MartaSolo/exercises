// Stwórz moduł Sklepu umożliwiający dodawanie do niego produktów
// Założenia:
// - Moduł powinien umożliwiać dodawanie produktów do sklepu.
// - Moduł powinien umożliwiać wyświetlenie wszystkich produktów ze sklepu.
// - Podczas dodawania produktu do sklepu moduł powinien wygenerować nową cenę dla produktu.
// - Kod odpowiedzialny za generowanie nowej ceny nie powinien być dostępny z zewnątrz.

const shopModule = (function () {
  const _products = [];
  console.log(_products);

  const _countNewPrice = (price) => {
    return price + price * 0.5 - 0.1;
  };

  const addProduct = (product) => {
    // musimy wywołac metode liczącą nową cenę zanim dodoamy ja do products, więc do products dodajemy zmodyfikowany product
    const newPrice = _countNewPrice(product.price);
    const newProduct = Object.assign({}, product, { price: newPrice });
    _products.push(newProduct);
  };

  const showProducts = () => {
    _products.map((product) => {
      console.log(product);
    });
  };

  return {
    addProduct: addProduct,
    showProducts: showProducts,
  };
})();

// tworzmy produkty
const product1 = {
  name: "headphones",
  price: 200,
};
const product2 = {
  name: "computer",
  price: 2300,
};

// dodajemy produkty
shopModule.addProduct(product1);
shopModule.addProduct(product2);

// produkcty bazowe - nie zostały zmodyfikowane
console.log(product1);
console.log(product2);
