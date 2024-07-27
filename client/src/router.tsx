import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { productsLoader, updateAvailabilityAction } from "./views/Products";
import NewProduct, { newProductAction } from "./views/NewProduct";
import EditProduct, {editProductAction, editProductLoader} from "./views/EditProduct";
import { DeleteProductAction } from "./components/ProductDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA Pattern - Resource -oriented design
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar',
                action: DeleteProductAction
            }
        ]
    }
])