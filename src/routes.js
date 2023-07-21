import Dashboard from "pages/dashboard";
import Products from "pages/products";

const Routes = [
  {
    path: "/",
    key: "/",
    exact: true,
    render: () => <Dashboard />,
  },
  {
    path: "/products",
    key: "/products",
    component: Products,
  },
];

export default Routes;



