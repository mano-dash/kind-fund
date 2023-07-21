
import React from "react";
import AppHeader from "../../components/shared/header";
import AppFooter from "../../components/shared/footer";
import DashboardBody from "components/featured/dashboard";
// import ProductBody from "../../components/featured/product";

class Product extends React.Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <DashboardBody />        
        <AppFooter />
      </div>
    );
  }
}
export default Product;



