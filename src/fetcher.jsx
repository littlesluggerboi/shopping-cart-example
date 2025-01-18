const url = "https://fakestoreapi.com";

const fetchWithId = async (productId) => {
  const res = fetch(`${url}/products/${productId}`);
  const product = (await res).json();
  return product;
};

const randomProductNumber = () => {
  return Math.floor(Math.random() * 21);
};

const randomProduct = () => {
  return fetchWithId(randomProductNumber);
};

const randomProducts = (count) => {
  let contain = [];
  const products = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = randomProductNumber();
    while (!contain.includes(randomNumber)) {
      products.push(fetchWithId(randomNumber));
      contain.push(randomNumber);
    }
  }

  return Promise.all(products);
};
const categories = [
  ["men", "men's clothing"],
  ["women", "women's clothing"],
  ["electronics", "electronics"],
  ["jewelery", "jewelery"],
];
const validCategories = new Map(categories);
const reversedMapping = new Map([
  ["men's clothing", "men"],
  ["women's clothing","women"],
  ["electronics", "electronics"],
  ["jewelery", "jewelery"],
]);

const getProductsbyCategory = async (category) => {
  const res = fetch(
    `${url}/products/category/${validCategories.get(category.toLowerCase())}`
  );
  const products = (await res).json();
  return products;
};

export {
  fetchWithId,
  randomProduct,
  randomProducts,
  getProductsbyCategory,
  validCategories,
  reversedMapping
};
