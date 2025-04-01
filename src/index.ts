/**
 *
 * This coding exercise will be dealing with products and shopping carts from a simple API.
 * Update the functions referenced in "Main" to complete each task.
 *
 * 1. Using a limit/page size of 10, fetch all the products from the API
 *  > Note: total count is available in the response.
 *
 * 2. Get all products with a price between 50 and 100 (inclusive)
 *
 * 3. Get the total weight of all products in a cart
 *
 *
 * Links:
 * - https://dummyjson.com/docs - API documentation
 * - https://dummyjson.com/docs/products#products-limit_skip - list all products, default page size is 30
 * - https://dummyjson.com/docs/carts#carts-single - get a single cart
 */

const apiBase = "https://dummyjson.com";

const getJson = async <T extends Record<string, any>>(path: string) => {
  const res = await fetch(path);
  return res.json() as Promise<T>;
};

// 1. Fetch all products
const fetchAllProducts = async (): Promise<Product[]> => {
  // TODO

  return [];
};

// 2. Filter products by price range
const filterProductsByPriceRange = async (
  min: number,
  max: number
): Promise<Product[]> => {
  const products = await fetchAllProducts();

  // TODO

  return products;
};

// 3. Get the total weight of all products in a cart
const getCartWeight = async (cartId: number): Promise<number> => {
  // TODO

  return 0;
};

// Main
(async () => {
  // 1. Fetch all products
  // console.log(await fetchAllProducts());
  // 2. Filter products by price range
  // console.log(await filterProductsByPriceRange(50, 100));
  // 3. Get the total weight of all products in a cart
  // console.log(await getCartWeight(20));
})();
