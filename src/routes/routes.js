import HomePage from '../views/HomePage/HomePage'
import NotFound from '../views/ErrorPage/NotFoundPage'
import ProductPage from '../views/ProductsPage/ProductPage'
import ProductFormPage from '../views/ProductFormPage/ProductFormPage'
const routes = [
    {
        path: "/",
        exact: true,
        main: () => {
            return (
                <HomePage />
            )
        }
    },
    {
        path: "/products",
        exact: true,
        main: () => {
            return (
                <ProductPage />
            )
        }
    },
    {
        path: "/products/add",
        exact: true,
        main: ({ history, match }) => {
            return (
                <ProductFormPage history={history} match={match} />
            )
        }
    },
    {
        path: "/products/edit/:id",
        exact: true,
        main: ({ history, match }) => {
            return (
                <ProductFormPage history={history} match={match} />
            )
        }
    },
    {
        path: "",
        exact: false,
        main: () => {
            return (
                <NotFound />
            )
        }
    },

]

export default routes;