/* naming coventions of the world

header and footer with the body as an outlet.
Routes
1. '/' - TBD
2. '/wishlist' - wishlist component
3. '/cart' - cart component
4. '/products' - all products regardless of category - products container
5. '/products/:category' - all products for the category - products container
7. '/products/:category/:productId - product specifics
*/

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home";
import ProductsContainer from "./components/products-container/products_container";
import ProductSpecifics from "./components/product_specifics/product_specifics";
import Cart from "./components/cart/cart";
import WishList from "./components/wishlist/wishlist"
import ErrorComponent from "./components/errorcomponent/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:category",
        element: <ProductsContainer />,
      },
      {
        path:"/:category/:productid",
        element: <ProductSpecifics/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/wishlist",
        element:<WishList/>
      }
    ],
    errorElement:<ErrorComponent/>
  }
]);

export default router;
